import React from "react";
import { CSSProperties } from "react";

const Logo = () => {
  const style: CSSProperties = {
    width: "80px",
    height: "80px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const logoStyle: CSSProperties = {
    width: "100%",
    height: "100%",
  };

  return (
    <div style={style}>
      <img
        style={logoStyle}
        src={`${process.env.PUBLIC_URL}/images/logo.png`}
        alt="Logo"
      />
    </div>
  );
};

export default Logo;
