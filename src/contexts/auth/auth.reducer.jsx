export default function reducer(state, action) {
  switch (action.type) {
    case "SIGNIN":
      return {
        ...state,
        currentForm: "signIn",
      };
    case "SIGNIN_SUCCESS":
      return {
        ...state,
        currentUser: action.payload,
        isAuthenticated: true,
        error: null,
      };
    case "SIGN_OUT":
      return {
        ...state,
        currentUser: {},
        isAuthenticated: false,
      };
    case "SIGNUP":
      return {
        ...state,
        currentForm: "signUp",
      };
    case "PROFILE":
      return {
        ...state,
        currentForm: "profile",
      };
    case "FORGOTPASS":
      return {
        ...state,
        currentForm: "forgotPass",
      };
    case "NEW_PASS":
      return {
        ...state,
        newPass: action.payload.new,
        userObject: action.payload.userObject,
        error: action.payload.error,
      };
    case "CHANGE_MID":
      return {
        ...state,
        mid: action.payload,
      };
    case "CHANGE_FORGOT_FORM":
      return {
        ...state,
        forgot_pass_form: action.payload,
      };
    case "CHANGE_FORGOT_EMAIL":
      return {
        ...state,
        forgot_email: action.payload,
      };
    case "ERROR":
      return {
        ...state,
        error: action.payload,
      };
    case "USER_OBJECT":
      return {
        ...state,
        userObject: action.payload,
      };
    case "REDIRECT":
      return {
        ...state,
        redirect: action.payload,
      };
    default:
      return state;
  }
}
