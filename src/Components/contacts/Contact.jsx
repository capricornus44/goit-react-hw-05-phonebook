// import { ContactContainer } from './ContactListStyled';

const Contact = ({ name, number, id, deleteContact }) => {
  const delContact = () => {
    deleteContact(id);
  };

  return (
    <li className="item">
      <span>{name}</span>
      <span className="num">{number}</span>
      <button type="button" onClick={delContact} className="deleteButton">
        Delete
      </button>
    </li>
  );
};

export default Contact;
