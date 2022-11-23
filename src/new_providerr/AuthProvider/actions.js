import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  updateProfile,
  sendPasswordResetEmail,
  signInWithPopup,

  // onAuthStateChanged,
  GoogleAuthProvider,
} from "firebase/auth";
import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_USER,
  FORGOT_PASSWORD,
  G_SIGN_IN,
} from "../constants";
import { auth } from "../../FirebaseConfig";

const useActions = (dispatch) => {
  const provider = new GoogleAuthProvider();
  provider.addScope("https://www.googleapis.com/auth/contacts.readonly");

  const signInUser = async (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        dispatch({
          type: SIGN_IN,
          user: res,
          loading: true,
        });
      })
      .catch((err) => {
        dispatch({
          type: SIGN_IN,
          error: err.message,
          authMessage: "Error: Couldn't sign in!",
        });
      });
  };

  const logoutUser = async () => {
    signOut(auth);

    try {
      dispatch({
        type: SIGN_OUT,
      });
    } catch (error) {
      dispatch({
        type: SIGN_OUT,
        error: "Couldn't signout",
        authMessage: "Error: Couldn't signout!",
      });
    }
  };

  const registerUser = async (email, password, name) => {
    // setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => updateProfile(auth.currentUser, {
        displayName: name,
      }))
      .then((res) => {
        dispatch({
          type: CREATE_USER,
          user: res,
          authMessage: "user registered!",
        // authRedirect: "/stream",
        });
      })
      .catch((err) => dispatch({
        type: CREATE_USER,
        error: err.message,
        authMessage: "couldn't create new user!",

      }));
    // .finally(() => setLoading(false));
  };

  const forgotPassword = async (email) => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        dispatch({
          type: FORGOT_PASSWORD,
          // authStatus: "reset-link-sent",
          authMessage: "Please check your email for your password reset link.",
          // authStatusType: "page",

        });
      })
      .catch((err) => {
        dispatch({
          type: FORGOT_PASSWORD,
          // authStatus: err.code,
          authMessage: "somethings went wrong! Please try again later",
          // authStatusType: "message",
          error: err.message,
        });
      });
  };

  // signin with google
  const gSignin = async () => {
    // setLoading(true);

    await signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // console.log("google pop-up token", token);
        const res = result;
        // setUser(res.user);
        dispatch({
          type: G_SIGN_IN,
          user: res.user,
          authMessage: "pop-up! Signin successfull!",
          // error: err.message,
        });
      })
      .catch((err) => {
        dispatch({
          type: G_SIGN_IN,
          error: err.message,
          authMessage: "Error: Couldn't sign in via Google pop-up!",
        });

        // const errorMessage = error.message;
        // The email of the user's account used.
        // const { email } = error.customData;
        // The AuthCredential type that was used.
        // const credential = GoogleAuthProvider.credentialFromError(error);
        // console.log(credential);
      });
  };

  return {
    registerUser,
    signInUser,
    gSignin,
    logoutUser,
    forgotPassword,
  };
};

export default useActions;
