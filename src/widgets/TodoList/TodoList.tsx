import React, { useEffect } from 'react';
import { useSelector } from "react-redux";
import useBindDispatch from 'src/app/hooks/useBindDispatch';
import ITodo from 'src/app/models';
import { getTodos as _getTodos } from "src/entities/todo";
import { setTodos as _setTodos } from "src/entities/todo";
import { selectTodos } from "src/entities/todo";
import { useFetchTodoQuery } from 'src/shared/api';
import TodoItem from "src/widgets/TodoItem";
import style from './TodoList.module.scss';

const TodoList = () => {
  const { data, isFetching } = useFetchTodoQuery(5);
  const setTodos = useBindDispatch(_setTodos);

  useEffect(() => {
    if (Array.isArray(data)) {
      setTodos(data);
    }
  }, [data]);

  const todosFromStore = useSelector(selectTodos);

  return <div className={style.itemList}>
    {todosFromStore.map((elem: ITodo) => {
      return elem && <TodoItem key={elem.id} id={elem.id} title={elem.title} />
    })}
  </div>
}

export default React.memo(TodoList);
