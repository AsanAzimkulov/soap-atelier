import { combineReducers, configureStore } from "@reduxjs/toolkit";
import data from './data/slice';

const rootReducer = combineReducers({
  data,
})

export const store = configureStore({
  reducer: rootReducer,
  middleware
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
