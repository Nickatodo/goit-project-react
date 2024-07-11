import { createSlice } from '@reduxjs/toolkit';
import { diaryProductsThunk } from '../operators/productOperator';

const initialState = {
  products: [],
  loading: false,
  error: null,
};

const productSlice = createSlice({
  initialState,
  name: 'products',
  extraReducers: builder => {
    builder.addCase(diaryProductsThunk.pending, state => {
      state.loading = true;
    });
    builder.addCase(diaryProductsThunk.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
    });
    builder.addCase(diaryProductsThunk.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload
        ? action.payload.message
        : 'Ha ocurrido un error.';
    });
  },
});

export const productReducer = productSlice.reducer;
