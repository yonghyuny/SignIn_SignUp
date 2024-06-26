import { CSSProperties } from "react";

export type SNSBtnProps = {
  url: string;
};

const SNSBtn = ({ url }: SNSBtnProps) => {
  const btnStyle: CSSProperties = {
    height: "40px",
    backgroundColor: "white",
    borderRadius: "50%",
  };
  return (
    <>
      <img style={btnStyle} src={url} alt="Logo" />
    </>
  );
};

export default SNSBtn;
