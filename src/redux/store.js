import { configureStore } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  reducers: {
    addContact(state, action) {
      state.push(action.payload);
    },
    deleteContact(state, action) {
      return state.filter(el => el.id !== action.payload);
    },
  },
});
export const { addContact, deleteContact } = contactsSlice.actions;
const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    contactsFilter(state, action) {
      return (state = action.payload);
    },
  },
});
export const { contactsFilter } = filterSlice.actions;

export const store = configureStore({
  reducer: {
    contacts: contactsSlice.reducer,
    filter: filterSlice.reducer,
  },
});
// export const addContact = createAction('contacts/add');
// export const deleteContact = createAction('contacts/delete');
// export const contactsFilter = createAction('contacts/filter');

// const contactsReducer = createReducer(
//   [
//     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//   ],
//   {
//     // [addContact]: (state, action) => [...state, action.payload],
//     [addContact]: (state, action) => {
//       state.push(action.payload);
//     },
//     [deleteContact]: (state, action) =>
//       state.filter(el => el.id !== action.payload),
//   }
// );
// const filterReducer = createReducer('', {
//   [contactsFilter]: (state, action) => (state = action.payload),
// });
// export const store = configureStore({
//   reducer: {
//     contacts: contactsReducer,
//     filter: filterReducer,
//   },
// });
