import React, {
  useRef,
} from 'react';
import useBindDispatch from 'src/app/hooks/useBindDispatch';
import {
  removeItem as _removeItem,
  updateItem as _updateItem
} from "src/entities/todo";
import Button from "src/shared/ui/Button"
import Input from 'src/shared/ui/Input';
import { useEditMode } from './hooks/useEditMode';
import style from './TodoItem.module.scss';

interface TodoItemProps {
  title: string,
  id: number | string,
}

const TodoItem = ({ title, id }: TodoItemProps) => {
  const titleRef = useRef<HTMLParagraphElement>() as React.MutableRefObject<HTMLParagraphElement>;

  const removeItem = useBindDispatch(_removeItem);
  const updateItem = useBindDispatch(_updateItem);

  const [editRef, isEdit, setEditState] = useEditMode();

  const handleRemoveButton = (e: React.MouseEvent<HTMLElement>) => {
    removeItem((e?.target as HTMLElement)?.id);
  }

  const handleEditButton = (e: React.MouseEvent<HTMLElement>) => {
    const currentValue = titleRef?.current?.textContent;

    if (isEdit) {
      const title = editRef?.current?.value;
      const id = (e?.target as HTMLElement)?.id;

      if (currentValue !== title && title!.trim()) {
        updateItem({ id, title });
      }
    }

    setEditState((prevValue) => !prevValue);
  }

  return <div key={id} className={style.wrapper}>
    <div className={style.container}>
      {isEdit
        ? <Input
          className='editMode'
          inputRef={editRef}
          defaultValue={titleRef?.current?.textContent as string}
        />
        : <p
          ref={titleRef}
          className={style.todoTitle}>
          {title}
        </p>
      }

      <div className={style.todoButtons}>
        <Button
          id={id as string}
          text={isEdit ? 'Save' : 'Edit'}
          onClick={handleEditButton} />
        <Button
          id={id as string}
          text='Remove'
          onClick={handleRemoveButton} />
      </div>
    </div>
  </div>
}

export default React.memo(TodoItem);
