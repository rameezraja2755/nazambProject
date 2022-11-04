import {
  createUserWithEmailAndPassword,
  updateProfile,
    signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "../firebaseConfig";

export const signUp = (email, password) => {
  createUserWithEmailAndPassword(auth, email, password).then(
    (userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log("user registered in auth file", user);
      // ...
    }
  );
};

export const signIn = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
  // .finally(()=>setLoading(false));
};

export const logoutUser = () => {
  signOut(auth);
};

export const forgotPassword = (email) => {
  return sendPasswordResetEmail(auth, email);
};
