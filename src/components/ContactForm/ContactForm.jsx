import React, { useState } from "react";
import PropTypes from "prop-types";
import { Form, Label, BtnSubmit, Input } from "./ContactForm.styled";

const ContactForm = ({onSubmit}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const onChangeNameInput = (ev) => {
    setName(ev.target.value);
  };

  const onChangeNumberInput = (ev) => {
    setPhone(ev.target.value);
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    onSubmit({ name, phone });
    reset();
  };
  const reset = () => {
    setName('')
    setPhone('')
  };

    return (
      <Form onSubmit={handleSubmit}>
        <Label>
          Name
          <Input
            type="text"
            name="name"
            value={name}
            onChange={onChangeNameInput}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example               Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>
        <Label>
          Number
          <Input
            type="tel"
            name="number"
            value={phone}
            onChange={onChangeNumberInput}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and             can start with +"
            required
          />
        </Label>
        <BtnSubmit type="submit">Add contact</BtnSubmit>
      </Form>
    );
  }

export default ContactForm;

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
