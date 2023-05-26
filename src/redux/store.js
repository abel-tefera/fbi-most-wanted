import { configureStore } from '@reduxjs/toolkit';
import wantedReducer from './wanted/wantedSlice';

export const store = configureStore({
  reducer: {
    wanted: wantedReducer,
  },
});
