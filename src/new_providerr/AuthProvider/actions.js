import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  // updateProfile,
  sendPasswordResetEmail,
  signInWithPopup,

  // onAuthStateChanged,
  GoogleAuthProvider,
} from "firebase/auth";
// import { Navigate } from "react-router-dom";
import {
  doc, serverTimestamp, setDoc, query, where, collection, getDocs,
} from "firebase/firestore";
import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_USER,
  FORGOT_PASSWORD,
  // G_SIGN_IN,
} from "../constants";
import { auth, db } from "../../FirebaseConfig";

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
          error: null,
          loggedIn: true,
          authMessage: "sign in completed!",
        });
        console.log(res, "response in gstate signin");
      })
      .catch((err) => {
        dispatch({
          type: SIGN_IN,
          error: err.message,

          loggedIn: false,
          authMessage: "Error: Couldn't sign in!",
        });
      });
  };

  const logoutUser = async () => {
    signOut(auth);

    try {
      dispatch({
        type: SIGN_OUT,
        authMessage: "Signout Successful!",
      });
    } catch (err) {
      dispatch({
        type: SIGN_OUT,
        error: err.message,
        authMessage: "Error: Couldn't signout!",
      });
    }
  };

  const registerUser = async (email, password, userName) => {
    // setLoading(true);
    await createUserWithEmailAndPassword(auth, email, password)

      .then((res) => {
        console.log(res, userName, "response in signup action ");
        dispatch({
          type: CREATE_USER,
          displayName: userName,
          user: res,
          authMessage: "user registered!",
        // authRedirect: "/stream",
        });

        setDoc(doc(db, "users", res.user.uid), {
          name: userName,
          emailId: email,
          id: res.user.uid,
          createdOn: serverTimestamp(),
          ProviderId: "signup",

        });
        // setDoc(doc(db, "userChats", res.user.uid), {});
        // console.log("action page res in signup", res);
      })
      .catch((err) => dispatch({
        type: CREATE_USER,
        error: err.message,
        authMessage: "Error!couldn't create new user!",

      }));
    // .finally (() => );
  };

  const forgotPassword = async (email) => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        dispatch({
          type: FORGOT_PASSWORD,
          authMessage: "Please check your email for your password reset link.",

        });
      })
      .catch((err) => {
        dispatch({
          type: FORGOT_PASSWORD,
          authMessage: "somethings went wrong! Please try again later",
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
        // const credential = GoogleAuthProvider.credentialFromResult(result);
      //  const token = credential.accessToken;

        const res = result;
        console.log("google signin res", res);
        dispatch({
          type: SIGN_IN,
          user: res.user,
          authMessage: "pop-up! Signin successfull!",
          // error: err.message,
        });

        const q = query(collection(db, "users"), where("id", "==", res.user.uid));
        const querySnapshot = getDocs(q);
        querySnapshot.forEach((qres) => {
          // doc.data() is never undefined for query doc snapshots
          console.log(qres, " => userl alredy exists:p", qres.data());
        });
        if (querySnapshot.empty) {
          // create chat
          // const id = nanoid();
          setDoc(doc(db, "users"), {
            name: res?.user?.displayName,
            photoUrl: res?.user?.photoURL,
            emailId: res.user.email,
            id: res.user.uid,
            createdOn: serverTimestamp(),
            ProviderId: "google",
          });
        }
      })
      .catch((err) => {
        dispatch({
          type: SIGN_IN,
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
