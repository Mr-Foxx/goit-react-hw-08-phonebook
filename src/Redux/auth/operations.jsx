import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const setAuth = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const unsetAuth = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const registerUser = createAsyncThunk(
  'auth/register',
  async (userDetails, thunkAPI) => {
    try {
      const resp = await axios.post('/users/signup', userDetails);
      setAuth(resp.data.token);

      return resp.data;
    } catch (e) {
      console.log(e.message);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  'auth/login',
  async (userDetails, thunkAPI) => {
    try {
      const resp = await axios.post('/users/login', userDetails);

      setAuth(resp.data.token);

      return resp.data;
    } catch (e) {
      console.log(e.message);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const logOutUser = createAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {
    try {
      await axios.post('/users/logout');
      unsetAuth();
    } catch (e) {
      console.log(e.message);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;

    if (token === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      setAuth(token);
      const resp = await axios.get('/users/current');
      console.log(resp.data);
      return resp.data;
    } catch (e) {
      console.log(e.message);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
