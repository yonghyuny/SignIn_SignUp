import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { MESSAGE } from "./SignIn/styles/MESSAGE";
import SubmitBtn from "./SignIn/components/atom/SubmitBtn";
import LogoTitle from "./SignIn/components/molecules/LogoTitle";
import ORDivide from "./SignIn/components/atom/ORDivide";
import SnsBtnGroup from "./SignIn/components/molecules/SNSBtnGroup";

import SignIn from "./SignIn/components/organisms/SignIn";

function App() {
  const handleChange = () => {
    // 기능구현
  };

  return (
    <div>
      <SignIn />
      {/* <Router>
        <Routes>
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/" element={<SignIn />} />
        </Routes>
      </Router> */}
    </div>
  );
}

export default App;
