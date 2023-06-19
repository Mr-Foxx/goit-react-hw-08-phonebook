import { createSlice } from '@reduxjs/toolkit';
// import { nanoid } from 'nanoid';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import { fetchContacts, addContact, deleteContact } from './contactOperations';

const phoneBookSlice = createSlice({
  name: 'phoneBook',

  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },

  extraReducers: {
    // ---fetch--

    [fetchContacts.pending](state) {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchContacts.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    // --add--

    [addContact.pending](state) {
      state.isLoading = true;
    },
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.items = [action.payload, ...state.items];
    },
    [addContact.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    // --delete--

    [deleteContact.pending](state) {
      state.isLoading = true;
    },
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.items = state.items.filter(
        contact => contact.id !== action.payload.id
      );
    },
  },
});

// export const { addNewContact, deleteContact } = phoneBookSlice.actions;

export const phoneBookReducer = phoneBookSlice.reducer;

// addNewContact(state, actions) {
//   const name = actions.payload.name;
//   const number = actions.payload.number;
//   const checkContact = state.contacts.find(item => item.name === name);
//   if (checkContact !== undefined) {
//     toast.success(`${name} is already in contacts.`);
//   } else {
//     const newContact = {
//       id: nanoid(),
//       name,
//       number,
//     };
//     state.contacts = [newContact, ...state.contacts];
//   }
// },
// deleteContact(state, action) {
//   const contactId = action.payload;
//   state.contacts = state.contacts.filter(
//     contact => contact.id !== contactId
//   );
// },
