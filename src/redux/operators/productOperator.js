import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://slim-mom-bd9397140525.herokuapp.com/api/';

const setAuthToken = token => {
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
};

export const diaryProductsThunk = createAsyncThunk(
  'products/get',
  async (_, { getState, rejectWithValue }) => {
    const state = getState();
    const token = state.auth.token;
    setAuthToken(token);
    try {
      const response = await axios.get('products');
      return response.data.products;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
