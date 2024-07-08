import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://slim-mom-bd9397140525.herokuapp.com/api/';
const myHeaders = {
  accept: '*/*',
  'Content-Type': 'application/json',
};

export const loginThunk = createAsyncThunk(
  'auth/login',
  async (credentials, thunkApi) => {
    try {
      const response = await axios.post(
        'users/login',
        {
          email: credentials.email,
          password: credentials.password,
        },
        { headers: myHeaders }
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
