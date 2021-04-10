import React, { Component } from 'react';
import { FormContainer } from './FormStyled';

class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addContact(this.state);

    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <>
        <FormContainer onSubmit={this.handleSubmit}>
          <label className="formLabel">
            Name
            <input
              type="text"
              name="name"
              value={this.state.name}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
              onChange={this.handleChange}
              className="formInput"
            />
          </label>

          <label className="formLabel">
            Number
            <input
              type="tel"
              name="number"
              value={this.state.number}
              pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{3})"
              title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
              required
              onChange={this.handleChange}
              className="formInput"
            />
          </label>

          <button type="submit" className="button">
            Add contact
          </button>
        </FormContainer>
      </>
    );
  }
}

export default Form;
