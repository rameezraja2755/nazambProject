// import router from "next/router";
import {
  createContext,
  useContext,
  useEffect, useReducer, useMemo,
} from "react";

// import PropTypes from "prop-types";

import {
  onAuthStateChanged,
  // GoogleAuthProvider,
} from "firebase/auth";

import useActions from "./actions";
import { initialState, reducer } from "./actionReducer";

import { auth } from "../../FirebaseConfig";

export const AuthContext = createContext();

function AuthProvider(props) {
  const { children } = props;

  const [state, dispatch] = useReducer(reducer, initialState);
  const actions = useActions(dispatch);

  useEffect(() => {
    state.loading = true;
    const unsubscribe = onAuthStateChanged(auth, (res) => {
      if (res) {
        state.user = res;
      } else {
        state.user = null;
        state.error = "";
        state.loading = false;
      }
    });
    return unsubscribe;
  }, []);

  const returnValues = {
    ...state,
    registerUser: actions.registerUser,
    signInUser: actions.signInUser,
    gSignin: actions.gSignin,
    logoutUser: actions.logoutUser,
    forgotPassword: actions.forgotPassword,
  };

  const authContextValue = useMemo(() => returnValues, [returnValues]);
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
