import React from "react";

interface ImageProps {
  src: string,
  className?: string,
}

const Image = ({ src, className }: ImageProps) => {
  return <img className={className} src={src} />
}

export default React.memo(Image);
