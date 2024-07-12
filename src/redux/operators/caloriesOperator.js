import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { setBloodType } from '../slices/authSlice';

axios.defaults.baseURL = 'https://slim-mom-bd9397140525.herokuapp.com/api/';

export const caloriesThunk = createAsyncThunk(
  'caloriesCalculator/calculator',
  async (formData, { rejectedWithValue }) => {
    try {
      const response = await axios.post('daily-rate', formData);
      return response.data;
    } catch (error) {
      return rejectedWithValue(error.response.data);
    }
  }
);

const setAuthToken = token => {
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
};

export const caloriesLogedThunk = createAsyncThunk(
  'caloriesCalculator/calculatorLoged',
  async (formData, { getState, dispatch, rejectedWithValue }) => {
    const state = getState();
    const token = state.auth.token;
    setAuthToken(token);
    const id = state.auth.id;
    try {
      const response = await axios.post(`daily-rate/${id}`, formData);
      dispatch(setBloodType(response.data.bloodType));
      return response.data;
    } catch (error) {
      return rejectedWithValue(error.response.data);
    }
  }
);
