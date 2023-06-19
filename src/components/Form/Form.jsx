import React from 'react';
import { FormContact, Label, Input, Button } from './Form.styled';
import { useDispatch } from 'react-redux';
import { addContact } from 'Redux/contactOperations';

export const Form = () => {
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();

    const name = evt.target.elements.name.value;
    const number = evt.target.elements.number.value;

    dispatch(addContact({ name, number }));

    evt.target.reset();
  };

  return (
    <FormContact onSubmit={handleSubmit}>
      <Label htmlFor="name">Name</Label>
      <Input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+([ '\-][a-zA-Zа-яА-Я]+)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <br />

      <Label htmlFor="number">Number</Label>
      <Input
        type="tel"
        name="number"
        pattern="^[0-9\s.\-\(\)+]+$"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <br />

      <Button type="submit">Add Contact</Button>
    </FormContact>
  );
};
