import React from "react";

export const useHandleEnterClick = () => {
  const sendButtonRef = React.useRef() as React.MutableRefObject<HTMLButtonElement>;

  const handleKeyUpPress = (e: React.ReactElement<HTMLButtonElement>) => {
    const buttonName = e.key;

    if (buttonName === 'Enter') {
      sendButtonRef.current.click();
    }
  }

  return [sendButtonRef, handleKeyUpPress] as const;
}
