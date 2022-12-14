import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { AxiosInstance } from "axios";
import data from './data/slice';
import user from './user/slice';
import userInterface from './interface/slice';

const rootReducer = combineReducers({
  data,
  user,
  userInterface,
})

export const setupStore = (api: AxiosInstance) =>
  configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: api
        }
      })
  });

export type RootState = ReturnType<typeof rootReducer>;

export type AppStore = ReturnType<typeof setupStore>;

export type AppDispatch = AppStore['dispatch'];
