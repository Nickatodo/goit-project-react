import { createSlice } from '@reduxjs/toolkit';
import {
  loginThunk,
  logoutThunk,
  updateTokenTunk,
} from '../operators/authOperator';

const initialState = {
  id: '',
  email: '',
  name: '',
  bloodType: '',
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
      state.id = '';
      state.email = '';
      state.bloodType = '';
      state.token = null;
      state.isLogged = false;
    },
    setBloodType: (state, action) => {
      state.bloodType = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload.token;
    },
  },
  extraReducers: builder => {
    builder.addCase(loginThunk.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(loginThunk.fulfilled, (state, action) => {
      state.loading = false;
      state.isLogged = true;
      state.token = action.payload.token;
      state.id = action.payload.id;
      state.email = action.payload.email;
      state.name = action.payload.name;
      state.bloodType = action.payload.bloodType;
    });
    builder.addCase(loginThunk.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(logoutThunk.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(logoutThunk.fulfilled, (state, action) => {
      state.loading = false;
      state.isLogged = false;
      state.token = null;
      state.id = '';
      state.email = '';
      state.name = '';
      state.bloodType = '';
    });
    builder.addCase(logoutThunk.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(updateTokenTunk.fulfilled, (state, action) => {
      state.token = action.payload.token;
    });
    builder.addCase(updateTokenTunk.rejected, (state, action) => {
      console.error('error token', action.payload);
    });
  },
});

export const { logout, setBloodType, setToken } = authSlice.actions;
export const authReducer = authSlice.reducer;
