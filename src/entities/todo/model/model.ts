import {
  createAsyncThunk,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import ITodo from 'src/app/models';
import { TodoState } from 'src/app/store/models';
// import { RootState } from 'src/app/store/store';

const initialState: TodoState = {
  todos: [],
}

export const getTodos = createAsyncThunk('todos/getTodos', () => {
  return fetch('https://jsonplaceholder.typicode.com/todos/5')
    .then(response => response.json())
    .catch(error => error);
});

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<ITodo>) => {
      const todo = action.payload;

      state.todos = [todo, ...state.todos];
    },
    setTodos: (state, action: PayloadAction<ITodo>) => {
      const todos = action.payload;

      state.todos = [...todos, ...state.todos];
    },
    removeItem: (state, action) => {
      const id = action.payload;

      state.todos = state.todos.filter((elem: ITodo) => String(elem.id) !== String(id));
    },
    updateItem: (state, action: PayloadAction<ITodo>) => {
      const item = action.payload;

      state.todos = state.todos.map((elem: ITodo) => {
        if (String(elem.id) === String(item.id)) {
          return {
            title: item.title,
            id: elem.id,
          }
        }

        return elem;
      });
    },
    sortUpItems: (state) => {
      if (state.todos.length > 1) {
        state.todos = state.todos.sort((a, b) => {
          const titleA = a.title.toLowerCase();
          const titleB = b.title.toLowerCase();

          if (titleA < titleB) {
            return -1;
          }

          return 0;
        });
      }
    },
    sortDownItems: (state) => {
      if (state.todos.length > 1) {
        state.todos = state.todos.sort((a, b) => {
          const titleA = a.title.toLowerCase();
          const titleB = b.title.toLowerCase();

          if (titleA > titleB) {
            return -1;
          }

          return 0;
        });
      }
    }
  },
  /* Here just as example. */

  // extraReducers: {
  //   [getTodos.pending]: () => {
  //     //handle pending case
  //   },
  //   [getTodos.fulfilled]: (state: RootState, action: PayloadAction) => {
  //     const todo = action.payload;

  //     state.todos = [todo];
  //   },
  //   [getTodos.rejected]: () => {
  //     //handle rejected case
  //   }
  // }
});

export const {
  addTodo,
  removeItem,
  updateItem,
  sortUpItems,
  sortDownItems,
  setTodos,
} = todoSlice.actions;

export default todoSlice.reducer;
