import ITodo from 'src/app/models';

export interface TodoState {
  todos: Array<ITodo>;
}

export interface AppState {
  todos: TodoState,
}
