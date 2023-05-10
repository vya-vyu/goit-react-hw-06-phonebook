import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import s from './Form.module.css';
import PropTypes from 'prop-types';

const Form = ({ handleSubmitContacts }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    const data = { id: uuidv4(), name, number };
    handleSubmitContacts(data);
    resetForm();
  };
  const resetForm = () => {
    setName('');
    setNumber('');
  };

  return (
    <>
      <form className={s.phonebook} onSubmit={handleSubmit}>
        <div className={s.inputWrapper}>
          <label htmlFor="name" className={s.title}>
            Name:
          </label>
          <input
            id="name"
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={e => {
              setName(e.currentTarget.value);
            }}
            className={s.inputText}
          />
          <label htmlFor="number" className={s.title}>
            Number:
          </label>
          <input
            id="number"
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={e => {
              setNumber(e.currentTarget.value);
            }}
            className={s.inputText}
          />
        </div>

        <button type="submit" className={s.submit}>
          Add contact
        </button>
      </form>
    </>
  );
};
Form.propTypes = {
  handleSubmitContacts: PropTypes.func,
};
export default Form;
