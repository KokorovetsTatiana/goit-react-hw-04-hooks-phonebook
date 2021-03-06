import { useState } from 'react';

import s from './Form.module.css';
export default function Form({ addContact }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const resetState = () => {
    setName('');
    setNumber('');
  };

  const handleInputChange = ({ currentTarget }) => {
    const { name, value } = currentTarget;
    if (name === 'name') {
      setName(value);
      return;
    }
    setNumber(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    addContact(name.trim(), number.trim());
    resetState();
  };

  return (
    <form onSubmit={handleSubmit} className={s.Form}>
      <ul className={s.List}>
        <li className={s.Item}>
          <label htmlFor="username" className={s.Label}>
            Name
          </label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleInputChange}
            className={s.Input}
            id="username"
            required
          />
        </li>
        <li className={s.Item}>
          <label htmlFor="usernumber" className={s.Label}>
            Number
          </label>
          <input
            type="tel"
            name="number"
            value={number}
            onChange={handleInputChange}
            className={s.Input}
            id="usernumber"
            required
          />
        </li>  
      </ul>
      <button type="submit" className={s.buttonSubmit}>
        Add contact
      </button>
    </form>
  );
}