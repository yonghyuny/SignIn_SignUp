import { CSSProperties } from "react";

type SubmitBtnProps = {
  text: string;
  onClick: () => void;
};

const SubmitBtn = ({ text, onClick }: SubmitBtnProps) => {
  const style: CSSProperties = {
    margin: "8px 0",
    padding: "8px",
    width: "100%",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "#6200ea",
    color: "#fff",
    cursor: "pointer",
    fontSize: "13px",
    height: "35px",
  };

  return (
    <>
      <button style={style} onClick={onClick}>
        {text}
      </button>
    </>
  );
};

export default SubmitBtn;
