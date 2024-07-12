import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from '../slices/authSlice';
import { registrationReducer } from '../slices/registrationSlice';
import { caloriesReducer } from '../slices/caloriesSlice';
import { diaryReducer } from '../slices/diarySlice';
import { productReducer } from '../slices/productSlice';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import storage from 'redux-persist/lib/storage';

const autPersistConfig = {
  key: 'auth',
  storage,
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(autPersistConfig, authReducer),
    registration: persistReducer(autPersistConfig, registrationReducer),
    caloriesCalculator: persistReducer(autPersistConfig, caloriesReducer),
    diary: persistReducer(autPersistConfig, diaryReducer),
    products: persistReducer(autPersistConfig, productReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistedStore = persistStore(store);
