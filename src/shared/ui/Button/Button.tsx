import React from 'react';
import style from './Button.module.scss';

interface ButtonProps {
  id?: string,
  text?: string,
  className? : string,
  buttonRef?: React.MutableRefObject<HTMLButtonElement>,
  children?: React.ReactElement,
  onClick: React.MouseEventHandler<HTMLButtonElement>,
}

const Button = ({
  text,
  buttonRef,
  children,
  className = 'defaultStyle',
  ...rest
}: ButtonProps) => {
  return <button
    ref={buttonRef}
    className={style[className]}
    {...rest}
  >
    {text}
    {children}
  </button>
}

export default React.memo(Button);