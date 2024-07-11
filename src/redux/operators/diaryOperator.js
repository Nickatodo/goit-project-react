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

export const diaryDateThunk = createAsyncThunk(
  'diary/info',
  async (date, { getState, rejectWithValue }) => {
    const state = getState();
    const token = state.auth.token;
    setAuthToken(token);
    try {
      const response = await axios.post('day/info', { date: date });
      const formattedFoods = response.data.getConsumer.foods.map(food => ({
        id: food.title._id,
        name: food.title.title,
        grams: food.weight,
        calories: food.calories,
      }));
      return formattedFoods;
    } catch (error) {
      if (error.response && error.response.status === 404) {
        return rejectWithValue('No se encontraron productos para esta fecha.');
      } else {
        return rejectWithValue(
          error.response ? error.response.data : 'Ha ocurrido un error.'
        );
      }
    }
  }
);

export const addProductToDiaryThunk = createAsyncThunk(
  'diary/addProductToDiary',
  async (
    { productId, weight, date, calories },
    { getState, rejectWithValue }
  ) => {
    const title = productId;
    const state = getState();
    const token = state.auth.token;
    setAuthToken(token);
    try {
      const response = await axios.post('day', {
        title,
        weight,
        date,
        calories,
      });
      return response.data;
    } catch (error) {
      if (error.response.data.message === 'food already exists') {
        return rejectWithValue('food already exists');
      }
      return rejectWithValue(error.response.data);
    }
  }
);

export const removeProductToDiaryThunk = createAsyncThunk(
  'diary/removeProductToDiary',
  async ({ id, date }, { getState, rejectWithValue }) => {
    const title = id;
    const state = getState();
    const token = state.auth.token;
    setAuthToken(token);
    console.log(id, title, date);
    try {
      await axios.delete('day', {
        data: { title, date },
      });
      return id;
    } catch (error) {
      console.log(error.response.data);
      console.log('Axios error:', error);
      return rejectWithValue(error.response.data);
    }
  }
);
