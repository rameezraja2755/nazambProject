import React, { useContext } from "react";

// import {userDetailContext} from "../../../Context/GlobalVar";
import LoginForm from "../../Organisms/logIn/Login";



const Login = () => {
 
  // const [userDetail] = useContext(userDetailContext);
 

  // const loginFunction = () => {
  //   userDetail.loggedIn(true);
  // };

  // const logoutFunction = () => {
  //   userDetail.loggedIn(false);
  // };

  return (
    <div>
<LoginForm />


      {/* Login:
      {userDetail.loggedIn ? (
        <button onClick={logoutFunction}>Logout</button>
      ) : (
        <button onClick={loginFunction}>Login</button>
      )} */}
    </div>
  );
};


export default Login;
