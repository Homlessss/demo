import React, { FunctionComponent, useState } from "react";

interface Props {
  text?: string;
  onTextClick: (text: string) => void;
}

export const Test: FunctionComponent<Props> = ({ text, onTextClick }) => {
  const [classes, ] = useState<string>("text-danger");
  const handleOnClick = () => {
    onTextClick("string parameter");
  };

  return (
    <div className={classes} onClick={handleOnClick}>
      {text}
    </div>
  );
};
