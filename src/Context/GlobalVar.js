import React, { useState, useEffect, useContext } from "react";
//import { Children } from "react";
import { createContext } from "react";
import {createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,onAuthStateChanged} from "firebase/auth"
import { auth } from "../firebaseConfig";
export const userDetailContext = createContext();

const GlobalVar = ({ children }) => {
  const [user,setUser] = useState("");

  const [AuthContext] = useState({
    name: "nazamb",
    loggedIn: false,
    rentPaid: 0,
  });

  function signUp(email, password){
    return (createUserWithEmailAndPassword(auth, email,password))
  }

   function signIn(email, password){
    return (signInWithEmailAndPassword(auth, email,password))
  }
  
useEffect(()=> {
  const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
    setUser(currentUser);
  });
  return () => {
    unsubscribe();
  }
},[]);


  return (
    <userDetailContext.Provider value={AuthContext}>
      {children}
    </userDetailContext.Provider>
  );
};

export default GlobalVar;

// export function useUserAuth() {
//   return useContext(userDetailContext);
// }
