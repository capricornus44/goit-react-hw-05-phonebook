import React, { Component } from 'react';
import Form from './form/Form';
// import Filter from './filter/Filter';
// import Contacts from './contacts/Contacts';

import { AppContainer } from './AppStyled';

import {
  getContacts,
  addContact,
  // deleteContact,
} from '../services/dbRequest';

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

  render() {
    return (
      <AppContainer>
        <section className="section">
          <h1>Phonebook</h1>
          <Form addContact={this.handleAddContact} />
        </section>

        {/* <section>
          <Filter />
        </section> */}

        {/* <section title="Contacts">
          <ContactList />
        </section> */}
      </AppContainer>
    );
  }
}

export default App;
