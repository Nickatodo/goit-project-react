import { createSlice } from '@reduxjs/toolkit';
import { loginThunk, logoutThunk } from '../operators/authOperator';

const initialState = {
  email: '',
  name: '',
  token: null,
  isLogged: false,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  initialState,
  name: 'auth',
  reducers: {
    logout: state => {
      state.email = '';
      state.token = null;
      state.isLogged = false;
    },
  },
  extraReducers: builder => {
    builder.addCase(loginThunk.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(loginThunk.fulfilled, (state, action) => {
      state.loading = false;
      state.isLogged = true;
      state.token = action.payload.token;
      state.email = action.payload.email;
      state.name = action.payload.name;
    });
    builder.addCase(loginThunk.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(logoutThunk.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(logoutThunk.fulfilled, (state, action) => {
      state.loading = false;
      state.isLogged = false;
      state.token = null;
      state.email = '';
      state.name = '';
    });
    builder.addCase(logoutThunk.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export const { logout } = authSlice.actions;
export const authReducer = authSlice.reducer;
