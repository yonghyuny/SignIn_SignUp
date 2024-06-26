import { CSSProperties } from "react";
import { MESSAGE } from "../../styles/MESSAGE";
import Input from "../atom/Input";
import Logo from "../atom/Logo";
import ORDivide from "../atom/ORDivide";
import SubmitBtn from "../atom/SubmitBtn";
import Title from "../atom/Title";
import SnsBtnGroup from "../molecules/SNSBtnGroup";

const SignIn = () => {
  //css
  const mainStyle: CSSProperties = {
    width: "100vw",
    height: "600px",
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

  const divStyle: CSSProperties = {
    width: "100%",
  };
  const form: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    maxWidth: "350px",
  };
  const optionsRow: CSSProperties = {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: "8px",
    alignItems: "center",
  };
  const checkboxContainer: CSSProperties = {
    display: "flex",
    alignItems: "center",
  };
  const checkboxLabel: CSSProperties = {
    marginLeft: "4px",
  };
  const forgotPassword: CSSProperties = {
    fontSize: "0.875rem",
    color: "#6200ea",
    textDecoration: "none",
  };
  const footer: CSSProperties = {
    marginTop: "15px",
  };

  return (
    <div style={mainStyle}>
      <div style={container}>
        <Logo />
        <Title title="" />
        <div style={form}>
          <div style={divStyle}>
            <Input
              type="text"
              placeholder={MESSAGE.ID}
              text="아이디"
              onChange={() => {}}
            />
            <Input
              type="password"
              placeholder={MESSAGE.PWD}
              text="비밀번호"
              onChange={() => {}}
            />
          </div>
          <div style={optionsRow}>
            <div style={checkboxContainer}>
              <input type="checkbox" id="rememberMe" />
              <label htmlFor="rememberMe" style={checkboxLabel}>
                Remember me
              </label>
            </div>
            <a href="#" style={forgotPassword}>
              Forgot Password?
            </a>
          </div>
          <SubmitBtn text="Sign In" onClick={() => {}} />
        </div>
        <ORDivide />
        <SnsBtnGroup />
        <div style={footer}>
          <span>Don't have an account?</span>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
