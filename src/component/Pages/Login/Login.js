import React, { useContext } from "react";
//import {userDetails } from "../GlobalVar";
import {userDetailContext} from "../../../GlobalVar";
const Login = () => {
 
  const [userDetail] = useContext(userDetailContext);
 

  const loginFunction = () => {
    userDetail.loggedIn(true);
  };

  const logoutFunction = () => {
    userDetail.loggedIn(false);
  };

  return (
    <div>
      Login:
      {userDetail.loggedIn ? (
        <button onClick={logoutFunction}>Logout</button>
      ) : (
        <button onClick={loginFunction}>Login</button>
      )}
    </div>
  );
};


export default Login;
