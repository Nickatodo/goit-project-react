import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { logout } from '../slices/authSlice';

axios.defaults.baseURL = 'https://slim-mom-bd9397140525.herokuapp.com/api/';

//const myHeaders = {
//  accept: '*/*',
//  'Content-Type': 'application/json',
//};

export const loginThunk = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('users/login', credentials);
      return {
        token: data.token,
        email: data.user.email,
        name: data.user.name,
      };
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const logoutThunk = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue, dispatch, getState }) => {
    try {
      const { auth } = getState();
      await axios.post(
        'users/logout',
        {},
        {
          headers: {
            Authorization: `Bearer ${auth.token}`,
          },
        }
      );
      dispatch(logout());
      return;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

/* 
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
      return {
        token: response.data.token,
        email: response.data.user.email,
      };
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const logoutThunk = createAsyncThunk(
  'auth/logout',
  async (_, { thunkApi, dispatch }) => {
    try {
      const state = thunkApi.getState();
      const token = state.auth.token;

      await axios.post(
        'users/logout',
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      dispatch(logout());
      return;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
*/
