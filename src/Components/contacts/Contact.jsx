import PropTypes from 'prop-types';

const Contact = ({ name, number, id, deleteContact }) => {
  const delContact = () => {
    deleteContact(id);
  };

  return (
    <li className="item">
      <span>{name}</span>
      <span className="num">{number}</span>
      <button type="button" onClick={delContact} className="deleteButton">
        <i className="fa fa-trash" aria-hidden="true" />
      </button>
    </li>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default Contact;
