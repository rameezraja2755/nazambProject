import React from "react";
// import { Link } from "react-router-dom";
// import { Box } from "@mui/system";
import logo from "../Images/logo.png";
import { Boxes, Innerbox, InnerLink } from "./MainNavbar.styled";

function MainNavbar() {
  // const location = useLocation();

  return (

    <Boxes>
      <img src={logo} alt="logo" />
      <Innerbox>
        <InnerLink to="/">
          {" "}
          Home
          {" "}
        </InnerLink>

        <InnerLink
          to="/Login"
        >
          {" "}
          Login
          {" "}
        </InnerLink>

        <InnerLink
          to="/Signup"
          // to={location.paHomeMainNavbarthname === "/Signup" ? "/Login" : "/Signup"}
        >

          Signup
          {/* {location.pathname === "Signup" ? "Login" : "Signup"} */}
          {" "}
        </InnerLink>
        <InnerLink
          to="/chat"
        >

          chat
          {/* {location.pathname === "Signup" ? "Login" : "Signup"} */}
          {" "}
        </InnerLink>
      </Innerbox>
    </Boxes>

  );
}

export default MainNavbar;
