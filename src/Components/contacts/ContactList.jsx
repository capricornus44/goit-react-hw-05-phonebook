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

export default ContactList;
