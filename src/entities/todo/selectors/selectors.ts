import { AppState } from 'src/app/store/models';

const selectTodo = (state: AppState) => state.todos;

export const selectTodos = (state: AppState) => selectTodo(state).todos;
