import React from "react";
import { CSSProperties } from "react";
import { SIZES } from "../../../css/root";

export type InputProps = {
  type: "text" | "password";
  placeholder: string;
  text: "아이디" | "비밀번호" | "비밀번호 확인" | "이메일" | "인증번호";
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ type, placeholder, text, onChange }: InputProps) => {
  const spanStyle: CSSProperties = {
    fontSize: "10px",
    display: "block",
    marginBottom: "4px",
  };

  const inputStyle: CSSProperties = {
    width: "100%",
    padding: "8px",
    borderRadius: "5px",
    border: "1px solid #ddd",
    marginBottom: "8px",
    height: "35px",
    fontSize: "16px",
    boxSizing: "border-box",
  };
  return (
    <div>
      <span style={spanStyle}>{text}</span>
      <div>
        <input
          style={inputStyle}
          type={type}
          placeholder={placeholder}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default Input;
