import React from 'react';

export const useEditMode = () => {
  const editRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;
  const [isEdit, setEditState] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (isEdit) {
      editRef?.current?.focus();
    }
  }, [isEdit]);

  return [editRef, isEdit, setEditState] as const;
}