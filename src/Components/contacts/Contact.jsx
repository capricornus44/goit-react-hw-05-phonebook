// import { ContactContainer } from './ContactListStyled';

const Contact = ({ name, number, id }) => {
  return (
    <li className="item">
      <span>{name}</span>
      <span className="num">{number}</span>
    </li>
  );
};

export default Contact;
