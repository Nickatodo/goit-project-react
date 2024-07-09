export const selectIsLogged = state => state.auth.isLogged;
export const selectToken = state => state.auth.token;
export const selectEmail = state => state.auth.email;
export const selectName = state => state.auth.name;
export const selectAuthLoading = state => state.auth.loading;
export const selectAuthError = state => state.auth.error;
