import AddTodo from "src/features/AddTodo";
import SortTodos from "src/features/SortTodos";
import TodoList from "src/widgets/TodoList";
import style from './Todo.module.scss';

const Todo = () => {
  return <div className={style.wrapper}>
    <div className={style.container}>
      <AddTodo />
      <SortTodos />
      <TodoList />
    </div>
  </div>
}

export default Todo;