import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// axios.defaults.baseURL = 'https://6484a111ee799e321626e17d.mockapi.io/api/v1';
// axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      const data = response.data;
      console.log('fetchContact >>data', data);
      const sortByName = data.sort((a, b) => a.name.localeCompare(b.name));
      console.log('sortByName', sortByName);
      return sortByName;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', {
        name: contact.name,
        number: contact.number,
      });
      // console.log('response add', response);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// export const updateContact = createAsyncThunk(
//   'contacts/updateContact',
//   async (editedContact, thunkAPI) => {
//     const { contactId, name, number } = editedContact;
//     try {
//       const resp = await axios.patch(`/contacts/${contactId}`, {
//         name,
//         number,
//       });
//       console.log('resp.data', resp);
//       return resp.data;
//     } catch (e) {
//       console.log(e.message);
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );
