import React, { Component } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { CSSTransition } from 'react-transition-group';
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

    try {
      if (
        contacts
          .map(contact => contact.name.toLowerCase())
          .includes(contact.name.toLowerCase())
      ) {
        toast.error(`${contact.name} already exists`);
        return;
      } else {
        const response = await addContact(contact);
        this.setState(prevState => ({
          contacts: [
            ...prevState.contacts,
            { ...contact, id: response.data.name },
          ],
        }));
      }
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
    const { filter, contacts, error } = this.state;
    const filteredContacts = this.getMatchingContacts();

    return (
      <AppContainer>
        {error && <h2 className="errorMessage">{error}</h2>}

        <section className="section">
          <CSSTransition
            in={true}
            appear={true}
            classNames="title-slideIn"
            timeout={500}
            unmountOnExit
          >
            <h1>Phonebook</h1>
          </CSSTransition>
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

        <ToastContainer autoClose={2500} position="top-right" type="error" />
      </AppContainer>
    );
  }
}

export default App;
