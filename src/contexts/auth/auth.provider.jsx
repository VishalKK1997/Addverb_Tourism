import React, { useReducer } from "react";
import { AuthContext } from "./auth.context";
import authReducer from "./auth.reducer";
import Router from "next/router";
import { removeCookie, setCookie, getCookie } from "../../utils/session";
import { toast } from "react-toastify";

const isBrowser = typeof window !== "undefined";

export const AuthProvider = ({ children }) => {
  const INITIAL_STATE = {
    isAuthenticated: isBrowser && !!getCookie("id_token"),
    currentForm: "signIn",
    currentUser: {},
    newPass: false,
    userObject: {},
    error: null,
    redirect: false,
    mid: "",
    forgot_pass_form: 0,
    forgot_email: "",
  };

  const [authState, authDispatch] = useReducer(authReducer, INITIAL_STATE);

  //// auth logout function for user
  const authLogout = async () => {
    // * logging out the user
    if (typeof window !== "undefined") {
      await Auth.signOut()
        .then((res) => {
          removeCookie("id_token");
          authDispatch({ type: "SIGN_OUT" });

          Router.push("/");
        })
        .catch((e) => {
          toast.error("error signing out, try again!");
        });
    }
  };

  //// checking current user
  // const authCheck = async () => {
  // 	// * checking if the current user is present
  // 	const userObject = await Auth.currentSession()
  // 		.then(async (res) => {
  // 			// * getting the user data
  // 			const userdata = await Auth.currentAuthenticatedUser()
  // 				.then((data) => {
  // 					// * setting the current user
  // 					authDispatch({
  // 						type: 'SIGNIN_SUCCESS',
  // 						payload: data.attributes,
  // 					});
  // 				})
  // 				.catch((e) => console.log(e));
  // 		})
  // 		.catch((err) => {
  // 			console.log(err);
  // 		});
  // };

  return (
    <AuthContext.Provider value={{ authState, authDispatch, authLogout }}>
      {children}
    </AuthContext.Provider>
  );
};
