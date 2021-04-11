import PropTypes from 'prop-types';
import Contact from './Contact';
import { ContactListContainer } from './ContactListStyled';

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ContactListContainer>
      {contacts.map(contact => {
        return (
          <Contact
            key={contact.id}
            {...contact}
            deleteContact={deleteContact}
          />
        );
      })}
    </ContactListContainer>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object.isRequired), // Не уверен, что правильно записал тип!!!!!
  deleteContact: PropTypes.func.isRequired,
};

export default ContactList;
