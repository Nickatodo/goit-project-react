import { createSlice } from '@reduxjs/toolkit';
import {
  caloriesThunk,
  caloriesLogedThunk,
} from '../operators/caloriesOperator';

const initialState = {
  data: null,
  loading: false,
  error: null,
};

const caloriesSlice = createSlice({
  initialState,
  name: 'caloriesCalculator',
  reducers: {
    reset: state => {
      state.data = null;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: builder => {
    builder.addCase(caloriesThunk.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(caloriesThunk.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(caloriesThunk.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(caloriesLogedThunk.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(caloriesLogedThunk.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(caloriesLogedThunk.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export const { reset } = caloriesSlice.actions;
export const caloriesReducer = caloriesSlice.reducer;
