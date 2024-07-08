import { createSlice } from '@reduxjs/toolkit';
import { loginThunk } from '../operators/authOperator';

const initialState = {
  email: '',
  token: null,
  isLogged: false,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  initialState,
  name: 'auth',
  extraReducers: builder => {
    builder.addCase(loginThunk.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(loginThunk.fulfilled, (state, action) => {
      state.loading = false;
      state.isLogged = true;
      state.token = action.payload.token;
      state.email = action.payload.email;
    });
    builder.addCase(loginThunk.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export const authReducer = authSlice.reducer;
