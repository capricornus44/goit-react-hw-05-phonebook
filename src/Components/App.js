import React, { Component } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import Form from './form/Form';
import Filter from './filter/Filter';
import ContactList from './contacts/ContactList';
import { AppContainer } from './AppStyled';

import { getContacts, addContact, deleteContact } from '../services/dbRequest';

import 'react-toastify/dist/ReactToastify.css';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
    error: '',
  };

  async componentDidMount() {
    try {
      const response = await getContacts();
      if (response.data) {
        const contacts = Object.keys(response.data).map(key => ({
          id: key,
          ...response.data[key],
        }));
        this.setState({ contacts });
      }
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      // this.setState({ isLoading: false });
    }
  }

  handleAddContact = async contact => {
    const { contacts } = this.state;
    // console.log(contact.name);

    try {
      const response = await addContact(contact);
      if (
        contacts
          .map(contact => contact.name.toLowerCase())
          .includes(contact.name.toLowerCase())
      ) {
        toast.error(`Contact "${contact.name}" already exists`);
        return;
      }

      this.setState(prevState => ({
        contacts: [
          ...prevState.contacts,
          { ...contact, id: response.data.name },
        ],
      }));
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      // this.setState({ isLoading: false });
    }
  };

  handleDeleteContact = async id => {
    try {
      await deleteContact(id);
      this.setState(prevState => ({
        contacts: prevState.contacts.filter(contact => contact.id !== id),
      }));
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      // this.setState({ isLoading: false });
    }
  };

  handleFilter = event => {
    const { value } = event.currentTarget;
    this.setState({ filter: value });
  };

  getMatchingContacts = () => {
    const { contacts, filter } = this.state;

    const optimizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(optimizedFilter),
    );
  };

  render() {
    const { filter, contacts } = this.state;
    const filteredContacts = this.getMatchingContacts();

    return (
      <AppContainer>
        <section className="section">
          <h1>Phonebook</h1>
          <Form addContact={this.handleAddContact} />
        </section>

        {contacts.length > 1 && (
          <section className="section">
            <h2>Find contact</h2>
            <Filter filter={filter} onChange={this.handleFilter} />
          </section>
        )}

        {contacts.length > 0 && (
          <section className="section">
            <h2>Contacts</h2>
            <ContactList
              contacts={filteredContacts}
              deleteContact={this.handleDeleteContact}
            />
          </section>
        )}

        <ToastContainer autoClose={2500} position="top-right" type="default" />
      </AppContainer>
    );
  }
}

export default App;
