import { configureStore } from '@reduxjs/toolkit';
import weatherSlice from './weather';

const store = configureStore({
  reducer: {
    weather: weatherSlice,
  },
});

export default store;