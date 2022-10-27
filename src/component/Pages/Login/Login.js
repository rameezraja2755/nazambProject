import React, { useContext } from "react";
import { userDetails } from "../GlobalVar";

const Login = () => {
  const userDetail = useContext(userDetails);
  //const setUserDetail = useContext(setUserDetails);

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
