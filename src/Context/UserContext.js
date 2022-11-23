import React, {
  createContext, useContext, useState, useEffect, useMemo,
} from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  updateProfile,
  sendPasswordResetEmail,
  signInWithPopup, GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "../FirebaseConfig";

export const UserContext = createContext({});

export const useUserContext = () => useContext(UserContext);

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const provider = new GoogleAuthProvider();

  useEffect(() => {
    setLoading(true);
    const unsubscribe = onAuthStateChanged(auth, (res) => {
      if (res) {
        setUser(res);
      } else {
        setUser(null);
      }
      setError("");
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const registerUser = (email, password, name) => {
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => updateProfile(auth.currentUser, {
        displayName: name,
      }))
      .then((res) => console.log(res))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  };

  const signInUser = (email, password) => {
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        setUser(res);
      })
      .catch((err) => setError(err.code))
      .finally(() => {
        setLoading(false);
      });
  };

  const logoutUser = () => {
    signOut(auth);
  };

  const forgotPassword = (email) => { sendPasswordResetEmail(auth, email); };

  // signin with google

  const gSignin = () => {
    setLoading(true);

    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        console.log(token);
        const res = result;
        setUser(res.user);
      }).catch((err) => {
        // const errorCode = error.code;
        setError(err.code);
        // const errorMessage = error.message;
        // The email of the user's account used.
        // const { email } = error.customData;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(credential);
      });
  };

  const returnValues = () => ({
    user,
    loading,
    error,
    signInUser,
    registerUser,
    logoutUser,
    forgotPassword,
    gSignin,
  });

  const contextValue = useMemo(returnValues, [{
    user,
    loading,
    error,
    signInUser,
    registerUser,
    logoutUser,
    forgotPassword,
    gSignin,
  }]);

  // console.log(contextValue);

  // const contextValue = {
  //   user,
  //   loading,
  //   error,
  //   signInUser,
  //   registerUser,
  //   logoutUser,
  //   forgotPassword,
  // };
  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
}
