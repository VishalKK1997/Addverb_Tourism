import Router from "next/router";
import React, { useContext, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import SignUpForm from "../components/signUpForm/sign-up-form";
import SignInForm from "../components/signInForm/sign-in-form";
import { AuthContext } from "../contexts/auth/auth.context";
import { getCookie } from "../utils/session";

const IndexPage = () => {
  const isAuth = getCookie("tourist_token");
  const {
    authState: { currentForm },
  } = useContext(AuthContext);
  console.log(currentForm, "currentForm");
  useEffect(() => {
    if (currentForm === "profile") {
      Router.replace("/profile");
    } else if (isAuth) {
      Router.replace("/homePage");
    }
  });
  return (
    <React.Fragment>
      <ToastContainer style={{ zIndex: 1212213213123 }} />
      {!isAuth && currentForm === "signUp" && <SignUpForm />}
      {!isAuth && currentForm === "signIn" && <SignInForm />}
    </React.Fragment>
  );
};

export default IndexPage;
