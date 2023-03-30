import { combineReducers, configureStore } from '@reduxjs/toolkit';
import walletReducer from '../shared/components/store/reducer';

const rootReducer = combineReducers({
  wallet: walletReducer,
});

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const { dispatch } = store;

export default store;
