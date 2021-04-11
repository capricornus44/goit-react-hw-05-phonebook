import React, { Component } from 'react';
import Form from './form/Form';
import Filter from './filter/Filter';
import ContactList from './contacts/ContactList';

import { AppContainer } from './AppStyled';

import { getContacts, addContact, deleteContact } from '../services/dbRequest';

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
    try {
      const response = await addContact(contact);
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
    const { filter } = this.state;
    const filteredContacts = this.getMatchingContacts();

    return (
      <AppContainer>
        <section className="section">
          <h1>Phonebook</h1>
          <Form addContact={this.handleAddContact} />
        </section>

        <section className="section">
          <h2>Find contact</h2>
          <Filter
            className="section"
            filter={filter}
            onChange={this.handleFilter}
          />
        </section>

        <section className="section">
          <h2>Contacts</h2>
          <ContactList
            contacts={filteredContacts}
            deleteContact={this.handleDeleteContact}
          />
        </section>
      </AppContainer>
    );
  }
}

export default App;
