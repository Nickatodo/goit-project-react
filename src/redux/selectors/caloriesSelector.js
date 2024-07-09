import { createSelector } from '@reduxjs/toolkit';

export const selectCaloriesdata = state => state.caloriesCalculator.data;
export const selectCaloriesLoading = state => state.caloriesCalculator.loading;
export const selectCaloriesError = state => state.caloriesCalculator.error;

export const selectCalories = createSelector(
  [selectCaloriesdata],
  data => data?.calories
);

export const selectProducts = createSelector(
  [selectCaloriesdata],
  data => data?.products || []
);
