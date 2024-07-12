import { createSlice } from '@reduxjs/toolkit';
import {
  diaryDateThunk,
  addProductToDiaryThunk,
  removeProductToDiaryThunk,
} from '../operators/diaryOperator';

const initialState = {
  selectedDate: null,
  tableData: [],
  loading: false,
  error: null,
};

const diarySlice = createSlice({
  initialState,
  name: 'diary',
  reducers: {
    setDate(state, action) {
      state.selectedDate = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(diaryDateThunk.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(diaryDateThunk.fulfilled, (state, action) => {
      state.loading = false;
      state.tableData = action.payload;
    });
    builder.addCase(diaryDateThunk.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload || 'Ha ocurrido un error';
      state.tableData = [];
    });
    builder.addCase(addProductToDiaryThunk.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(addProductToDiaryThunk.fulfilled, (state, action) => {
      state.loading = false;
      state.tableData.push(action.payload);
    });
    builder.addCase(addProductToDiaryThunk.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(removeProductToDiaryThunk.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(removeProductToDiaryThunk.fulfilled, (state, action) => {
      state.loading = false;
      state.tableData = state.tableData.filter(
        product => product._id !== action.payload.productId
      );
    });
    builder.addCase(removeProductToDiaryThunk.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export const { setDate } = diarySlice.actions;
export const diaryReducer = diarySlice.reducer;
