import React from "react";
// import Navbar from "../../Organisms/Navbar";
// import {userDetailContext} from "../../../Context/GlobalVar";
import LoginForm from "../../Organisms/LogIn/Login";
import HomeNavbar from "../../Organisms/Navlog";

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
      <HomeNavbar />
      <LoginForm />
    </div>
  );
}

export default Login;
