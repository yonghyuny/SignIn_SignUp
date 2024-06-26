import React from "react";
import { CSSProperties } from "react";

export type CheckBoxProps = {
  text: string;
};

const CheckBox = ({ text }: CheckBoxProps) => {
  const style: CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  };

  return (
    <div style={style}>
      <input type="checkbox" />
      <span>{text}</span>
    </div>
  );
};

export default CheckBox;
