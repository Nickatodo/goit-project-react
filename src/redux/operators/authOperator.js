import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { logout, setToken } from '../slices/authSlice';
import { reset } from '../slices/productSlice';

axios.defaults.baseURL = 'https://slim-mom-bd9397140525.herokuapp.com/api/';

// Configurar el token en el header
const setAuthToken = token => {
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
};

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
      dispatch(reset());
      dispatch(logout());
      return;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const updateTokenTunk = createAsyncThunk(
  'auth/updateToken',
  async (_, { rejectWithValue, dispatch, getState }) => {
    const state = getState();
    const token = state.auth.token;

    try {
      const newToken = token;

      dispatch(setToken({ token: newToken }));
      setAuthToken(newToken);
      return { token: newToken };
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
