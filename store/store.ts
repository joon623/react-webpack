import { configureStore } from '@reduxjs/toolkit';
import counterSlice from '../src/features/counter/counterSlice';

const reducer = {
  counter: counterSlice,
};

const store = configureStore({
  reducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
