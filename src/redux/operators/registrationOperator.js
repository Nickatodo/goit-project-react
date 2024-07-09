import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://slim-mom-bd9397140525.herokuapp.com/api/';

export const registerThunk = createAsyncThunk(
  'auth/registration',
  async (userData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/signup', userData);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
