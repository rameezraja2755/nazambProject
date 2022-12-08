// import { AccessTimeOutlined } from "@mui/icons-material";
// import { actionTypes } from "react-redux-firebase";

import {

  SIGN_IN,
  SIGN_OUT,
  FORGOT_PASSWORD,
  CREATE_USER,
  FIREBASE_USERS,
  // G_SIGN_IN,
} from "../constants";

export const initialState = {
  userId: null,
  userName: "",
  phoneNo: "",

  // userRole: null,
  loading: false,
  error: null,
  loggedIn: false,
  authMessage: "",
  firestoreUsers: [],
};

export const reducer = (state, action) => {
  switch (action.type) {
  case SIGN_IN:
    return {
      ...state,
      // userId: action.user.uid,
      userId: action?.user?.uid,
      userName: action?.user?.displayName,
      loading: action?.loading,
      error: action?.error,
      loggedIn: true,
      authMessage: action?.authMessage,

    };

  case SIGN_OUT:
    return {
      ...state,
      userId: null,
      userName: "",
      loading: false,
      error: null,
      loggedIn: false,
      authMessage: action.authMessage,
    };

  case CREATE_USER:
    console.log(action.user, "this is user new");

    return {
      ...state,
      userId: action?.user?.user?.uid,
      userName: action?.displayName,
      loading: false,
      error: action?.error,
      loggedIn: true,
      authMessage: action?.authMessage,
    };

  case FORGOT_PASSWORD:
    return {
      ...state,
      userId: null,
      userName: "",
      loading: false,
      error: action.error,
      loggedIn: false,
      authMessage: action.authMessage,
    };

  case FIREBASE_USERS:

    return {
      ...state,
      firestoreUsers: action.firestoreUserList,
    };
  default:
    return state;
  }
};
