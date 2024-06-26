import { CSSProperties } from "react";
import { SIZES } from "../../../css/root";

export type DoublcCheckProps = {
  text: "중복 확인" | "이메일 인증" | "인증 확인";
  onChange: () => void;
  backgroundColor?: string;
  color?: string;
};

const DoubleCheck = ({
  text,
  onChange,
  backgroundColor = "gray",
  color = "black",
}: DoublcCheckProps) => {
  const style: CSSProperties = {
    backgroundColor: backgroundColor,
    color: color,
    border: "1px solid #ddd",
    borderRadius: "5px",
    padding: "8px 15px",
    cursor: "pointer",
    height: "35px",
    width: "100px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "10px",
  };

  return (
    <>
      <button style={style} onClick={onChange}>
        {text}
      </button>
    </>
  );
};
export default DoubleCheck;
