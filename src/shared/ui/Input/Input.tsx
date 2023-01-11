import React from 'react';
import style from './Input.module.scss';

interface InputProps {
  inputRef: React.MutableRefObject<HTMLInputElement>,
  className: string,
  defaultValue?: string,
  placeholder?: string,
  handleKeyUpPress?: React.KeyboardEventHandler<HTMLInputElement>,
}

const Input = ({
  inputRef,
  className,
  handleKeyUpPress,
  ...rest
}: InputProps) => {
  return <input
    ref={inputRef}
    className={style[className]}
    onKeyUp={handleKeyUpPress}
    {...rest}
  />
}

export default React.memo(Input);