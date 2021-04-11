import React, { Component } from 'react';
import Form from './form/Form';
// import Filter from './filter/Filter';
import ContactList from './contacts/ContactList';

import { AppContainer } from './AppStyled';

import { getContacts, addContact, deleteContact } from '../services/dbRequest';

class App extends Component {
  state = {
    contacts: [],
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
        courses: prevState.contacts.filter(contact => contact.id !== id),
      }));
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      // this.setState({ isLoading: false });
    }
  };

  render() {
    const { contacts } = this.state;
    return (
      <AppContainer>
        <section className="section">
          <h1>Phonebook</h1>
          <Form addContact={this.handleAddContact} />
        </section>

        {/* <section>
          <Filter />
        </section> */}

        <section className="section" title="Contacts">
          <ContactList
            contacts={contacts}
            deleteContact={this.handleDeleteContact}
          />
        </section>
      </AppContainer>
    );
  }
}

export default App;
