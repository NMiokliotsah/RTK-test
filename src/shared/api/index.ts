import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import ITodo from 'src/app/models';

const API = 'https://jsonplaceholder.typicode.com/todos';

export const apiTodo = createApi({
  reducerPath: 'todoApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API,
  }),
  endpoints(builder) {
    return {
      fetchTodo: builder.query<ITodo[], number | void>({
        query(userId = 1) {
          return `?userId=${userId}`;
        },
      })
    };
  }
});

export const {
  useFetchTodoQuery,
} = apiTodo;
