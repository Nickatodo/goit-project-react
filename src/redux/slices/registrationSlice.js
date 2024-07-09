import { createSlice } from '@reduxjs/toolkit';
import { registerThunk } from '../operators/registrationOperator';

const initialState = {
  email: '',
  name: '',
  isRegistered: false,
  loading: false,
  error: null,
};

const registrationSlice = createSlice({
  initialState,
  name: 'registration',
  extraReducers: builder => {
    builder.addCase(registerThunk.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(registerThunk.fulfilled, (state, action) => {
      state.loading = false;
      state.isRegistered = true;
      state.email = action.payload.user.email;
      state.name = action.payload.user.name;
    });
    builder.addCase(registerThunk.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export const registrationReducer = registrationSlice.reducer;
