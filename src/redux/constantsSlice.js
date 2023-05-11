import { createSlice } from '@reduxjs/toolkit';
export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    data: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
  },
  reducers: {
    addContact(state, action) {
      state.data.push(action.payload);
    },
    deleteContact(state, action) {
      state.data = state.data.filter(el => el.id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
