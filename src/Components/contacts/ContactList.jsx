import Contact from './Contact';
import { ContactListContainer } from './ContactListStyled';

const ContactList = ({ contacts }) => {
  return (
    <ContactListContainer>
      {contacts.map(contact => {
        return <Contact key={contact.id} {...contact} />;
      })}
    </ContactListContainer>
  );
};

export default ContactList;
