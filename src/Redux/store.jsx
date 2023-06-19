import { configureStore } from '@reduxjs/toolkit';
import { phoneBookReducer } from './phoneBookSlice';
import filterContactsSlice from './filterContactsSlice';

// import storage from 'redux-persist/lib/storage';
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';

// const persistConfig = {
//   key: 'contacts',
//   storage,
// };

// export const persistContact = persistReducer(persistConfig, phoneBookSlice);

export const store = configureStore({
  reducer: {
    // contacts: persistContact,
    contacts: phoneBookReducer,
    filter: filterContactsSlice,
  },
  // middleware(getDefaultMiddleware) {
  //   return getDefaultMiddleware({
  //     serializableCheck: {
  //       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  //     },
  //   });
  // },
});

// export const persistor = persistStore(store);
