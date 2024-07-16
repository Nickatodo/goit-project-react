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
  reducers: {
    reset: state => {
      state.products = [];
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: builder => {
    builder.addCase(diaryProductsThunk.pending, state => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(diaryProductsThunk.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
    });
    builder.addCase(diaryProductsThunk.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export const { reset } = productSlice.actions;
export const productReducer = productSlice.reducer;
