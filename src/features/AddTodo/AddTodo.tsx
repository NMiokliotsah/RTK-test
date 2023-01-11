import React, { useRef } from "react";
import useBindDispatch from "src/app/hooks/useBindDispatch";
import { addTodo as _addTodo } from "src/entities/todo";
import Button from "src/shared/ui/Button";
import Input from "src/shared/ui/Input";
import style from './AddTodo.module.scss';
import { useHandleEnterClick } from "./hooks";
import { v4 as uuidv4 } from 'uuid';

const AddTodo = () => {
  const inputRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  const [sendButtonRef, handleKeyUpPress] = useHandleEnterClick();

  const addTodo = useBindDispatch(_addTodo);

  const handleOnClick = () => {
    const title = inputRef?.current?.value;

    if (!title.trim()) {
      return;
    }

    addTodo({ title, id: uuidv4() });

    inputRef.current.value = '';
  }

  return <div className={style.wrapper}>
    <Input
      className="todoInput"
      placeholder='Type a todo'
      inputRef={inputRef}
      handleKeyUpPress={handleKeyUpPress}  />
    <Button
      text="Add todo"
      buttonRef={sendButtonRef}
      onClick={handleOnClick}  />
  </div>
}

export default AddTodo;
