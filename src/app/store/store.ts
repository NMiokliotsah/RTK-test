import {
  combineReducers,
  configureStore,
  Store,
} from '@reduxjs/toolkit';
import todosReducer from 'src/entities/todo';
import { apiTodo } from 'src/shared/api';
import { AppState } from './models';
import logger from 'redux-logger';

export type TAppStore = Store<AppState>;

const rootReducer = combineReducers({
  todos: todosReducer,
  [apiTodo.reducerPath]: apiTodo.reducer,
});

export const store:TAppStore = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiTodo.middleware, logger),
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
