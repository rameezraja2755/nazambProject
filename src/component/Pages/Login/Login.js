import React from "react";

// import {userDetailContext} from "../../../Context/GlobalVar";
import LoginForm from "../../Organisms/logIn/Login";

function Login() {
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
    </div>
  );
}

export default Login;
