import { createSlice } from '@reduxjs/toolkit';

const phoneBookSlice = createSlice({
  name: 'phoneBook',
  initialState: {
    contacts: [],
    filter: '',
  },

  reducers: {
    addContact(state, { payload }) {
      state.contacts = [...state.contacts, payload];
    },
    deleteContact(state, { payload }) {
      state.contacts = state.contacts.filter(({ id }) => id !== payload);
    },
    setFilter(state, { payload }) {
      state.filter = payload;
    },
  },
});
export const { addContact, deleteContact, setFilter } = phoneBookSlice.actions;
export const phoneBookReducer = phoneBookSlice.reducer;
