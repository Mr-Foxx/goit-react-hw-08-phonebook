import { configureStore } from '@reduxjs/toolkit';
import { phoneBookReducer } from './contacts/phoneBookSlice';
import filterContactsSlice from './contacts/filterContactsSlice';
import { authSliceReducer } from './auth/slice';
import storage from 'redux-persist/lib/storage';
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

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const persistedAuthReducer = persistReducer(persistConfig, authSliceReducer);

export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    contacts: phoneBookReducer,
    filter: filterContactsSlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
