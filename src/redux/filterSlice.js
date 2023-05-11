import { createSlice } from '@reduxjs/toolkit';
export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    contactsFilter(state, action) {
      return (state = action.payload);
    },
  },
});
export const { contactsFilter } = filterSlice.actions;
