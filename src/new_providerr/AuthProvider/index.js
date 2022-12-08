// import router from "next/router";
import {
  createContext,
  useContext,
  useEffect, useReducer, useMemo, useState,
} from "react";

// import PropTypes from "prop-types";

import {
  onAuthStateChanged,
  // GoogleAuthProvider,
} from "firebase/auth";

import useActions from "./actions";
import { initialState, reducer } from "./actionReducer";

import { auth } from "../../FirebaseConfig";
import { SIGN_IN } from "../constants";

export const AuthContext = createContext();

function AuthProvider(props) {
  const { children } = props;
  const [isloading, setIsloading] = useState(true);

  const [state, dispatch] = useReducer(reducer, initialState);
  const actions = useActions(dispatch);

  useEffect(() => {
    state.loading = true;
    const unsubscribe = onAuthStateChanged(auth, (res) => {
      dispatch({
        type: SIGN_IN,
        user: res,
        loading: true,
        error: null,
        loggedIn: true,
        authMessage: "sign in completed!",
      });
      // console.log("user in context index page :@ ", res);
      if (res) {
        state.user = res;
      } else {
        state.user = null;
        state.error = "";
        state.loading = false;
      }
      setIsloading(false);
    });
    return unsubscribe;
  }, []);

  // console.log(state, "this is state");

  const returnValues = {
    ...state,
    dispatch,
    registerUser: actions.registerUser,
    signInUser: actions.signInUser,
    gSignin: actions.gSignin,
    logoutUser: actions.logoutUser,
    forgotPassword: actions.forgotPassword,
  };

  const authContextValue = useMemo(() => returnValues, [returnValues]);

  if (isloading) {
    return <div>loading.....</div>;
  }
  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
}

// AuthProvider.propTypes = {
//   children: PropTypes.node.isRequired,
// };

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth can only be used inside AuthProvider");
  }
  return context;
};

export default AuthProvider;
