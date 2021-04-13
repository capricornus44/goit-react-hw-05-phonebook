import PropTypes from 'prop-types';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Contact from './Contact';
import { ContactListContainer } from './ContactListStyled';

const ContactList = ({ contacts, deleteContact }) => {
  return (
    // <ContactListContainer>
    //   {contacts.map(contact => {
    //     return (
    //       <Contact
    //         key={contact.id}
    //         {...contact}
    //         deleteContact={deleteContact}
    //       />
    //     );
    //   })}
    // </ContactListContainer>

    <TransitionGroup>
      <ContactListContainer>
        {contacts.map(contact => {
          return (
            <CSSTransition
              in={true}
              classNames="contact-animation"
              timeout={250}
              unmountOnExit
            >
              <Contact
                key={contact.id}
                {...contact}
                deleteContact={deleteContact}
              />
            </CSSTransition>
          );
        })}
      </ContactListContainer>
    </TransitionGroup>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object.isRequired), // Не уверен, что правильно записал тип!!!!!
  deleteContact: PropTypes.func.isRequired,
};

export default ContactList;
