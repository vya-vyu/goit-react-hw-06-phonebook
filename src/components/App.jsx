import { useState, useEffect } from 'react';
import FilterContacts from './FilterContacts/FilterContacts';

import ContactsList from './ContactsList/ContactsList';
import Form from './Form/Form';

export const App = () => {
  const [filter, setFilter] = useState('');
  const [contacts, setContacts] = useState(
    JSON.parse(window.localStorage.getItem('contacts')) ?? [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ]
  );

  const arr = () => {
    return contacts.filter(el =>
      el.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const handleDeleteContact = id => {
    setContacts([...contacts.filter(el => el.id !== id)]);
  };
  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);
  const handleSubmitContacts = data => {
    contacts.find(
      contact => contact.name.toLowerCase() === data.name.toLowerCase()
    )
      ? window.alert(`${data.name} is already in contacts`)
      : setContacts([...contacts, data]);
  };
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        // fontSize: 40,
        color: '#010101',
      }}
    >
      <Form handleSubmitContacts={handleSubmitContacts} />
      <h2>Contacts</h2>
      <FilterContacts filter={filter} setFilter={setFilter} />
      <ContactsList contacts={arr()} onDelete={handleDeleteContact} />
    </div>
  );
};
