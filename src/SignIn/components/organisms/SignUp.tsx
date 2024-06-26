import React, { CSSProperties } from "react";
import Logo from "../atom/Logo";
import Title from "../atom/Title";
import Input from "../atom/Input";
import DoubleCheck from "../atom/DoubleCheck";
import SubmitBtn from "../atom/SubmitBtn";
import ORDivide from "../atom/ORDivide";
import SnsBtnGroup from "../molecules/SNSBtnGroup";
import { COLORS } from "../../../css/root";
import { MESSAGE } from "../../styles/MESSAGE";

const SignUp = () => {
  //css
  const mainStyle: CSSProperties = {
    width: "100vw",
    height: "600px",
  };
  const divStyle: CSSProperties = {
    width: "100%",
  };

  const container: CSSProperties = {
    width: "100%",
    maxWidth: "420px",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
    border: "1px solid black",
    borderRadius: "10px",
  };
  const form: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    maxWidth: "350px",
  };
  const inputRow: CSSProperties = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginBottom: "10px",
  };
  const footer: CSSProperties = {
    marginTop: "20px",
  };

  return (
    <div style={mainStyle}>
      <div style={container}>
        <Logo />
        <Title title={MESSAGE.TITLE} />
        <div style={form}>
          <div style={inputRow}>
            <Input
              type="text"
              placeholder={MESSAGE.ID}
              text="아이디"
              onChange={() => {}}
            />
            <DoubleCheck
              text="중복 확인"
              onChange={() => {}}
              backgroundColor={COLORS.SECONDARY}
              color="black"
            />
          </div>
          <div style={divStyle}>
            <Input
              type="password"
              placeholder={MESSAGE.PWD}
              text="비밀번호"
              onChange={() => {}}
            />
            <Input
              type="password"
              placeholder="비밀번호를 입력해주세요"
              text="비밀번호 확인"
              onChange={() => {}}
            />
          </div>
          <div style={inputRow}>
            <Input
              type="text"
              placeholder="이메일 주소를 입력해주세요"
              text="이메일"
              onChange={() => {}}
            />
            <DoubleCheck
              text="이메일 인증"
              onChange={() => {}}
              backgroundColor="gray"
              color="black"
            />
          </div>
          <div style={inputRow}>
            <Input
              type="text"
              placeholder="인증번호 4자리를 입력해주세요"
              text="인증번호"
              onChange={() => {}}
            />
            <DoubleCheck
              text="인증 확인"
              onChange={() => {}}
              backgroundColor="gray"
              color="black"
            />
          </div>
          <SubmitBtn text="Sign Up" onClick={() => {}} />
        </div>
        <ORDivide />
        <SnsBtnGroup />
        <div style={footer}>
          <span>Already have an account?</span>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
