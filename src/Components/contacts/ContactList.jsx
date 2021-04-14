import PropTypes from 'prop-types';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Contact from './Contact';
import { ContactListContainer } from './ContactListStyled';

const ContactList = ({ contacts, deleteContact }) => {
  return (
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
  contacts: PropTypes.arrayOf(PropTypes.object.isRequired),
  deleteContact: PropTypes.func.isRequired,
};

export default ContactList;
