import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://slim-mom-bd9397140525.herokuapp.com/api/';

export const caloriesThunk = createAsyncThunk(
  'caloriesCalculator/calculator',
  async (formData, { RejectedWithValue }) => {
    try {
      console.log(formData);
      const response = await axios.post('daily-rate', formData);
      console.log(response.data);
      return response.data;
    } catch (error) {
      return RejectedWithValue(error.response.data);
    }
  }
);
