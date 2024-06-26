import { CSSProperties } from "react";
import SNSBtn from "../atom/SNSBtn";

const SnsBtnGroup = () => {
  const btnStyle: CSSProperties = {
    display: "flex",
    marginTop: "15px",
    gap: "10px",
  };

  return (
    <div>
      <span>SNS 회원가입</span>
      <div style={btnStyle}>
        <SNSBtn url={`${process.env.PUBLIC_URL}/images/kaTalkLogo.png`} />
        <SNSBtn url={`${process.env.PUBLIC_URL}/images/NaverLogo.png`} />
      </div>
    </div>
  );
};

export default SnsBtnGroup;
