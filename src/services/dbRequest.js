import axios from 'axios';

const getContacts = async () => {
  try {
    const response = await axios.get(
      `https://phonebook-react-default-rtdb.firebaseio.com/contacts.json`,
    );
    return response;
  } catch (error) {
    throw new Error(error);
  }
};

const addContact = async contact => {
  try {
    const response = await axios.post(
      `https://phonebook-react-default-rtdb.firebaseio.com/contacts.json`,
      contact,
    );
    return response;
  } catch (error) {
    throw new Error(error);
  }
};

const deleteContact = async id => {
  try {
    await axios.delete(
      `https://phonebook-react-default-rtdb.firebaseio.com/contacts/${id}.json`,
    );
  } catch (error) {
    throw new Error(error);
  }
};

export { getContacts, addContact, deleteContact };
