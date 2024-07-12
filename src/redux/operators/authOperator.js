import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { logout } from '../slices/authSlice';

axios.defaults.baseURL = 'https://slim-mom-bd9397140525.herokuapp.com/api/';

export const loginThunk = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('users/login', credentials);
      return {
        token: data.token,
        id: data.user.id,
        email: data.user.email,
        name: data.user.name,
        bloodType: data.user.bloodType,
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
