import { configureStore } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactsSlice = createSlice({
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
const persistConfig = {
  key: 'contacts',
  storage,
};
const persistedContactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);
export const store = configureStore({
  reducer: {
    contacts: persistedContactsReducer,
    filter: filterSlice.reducer,
  },
});

export const persistor = persistStore(store);
