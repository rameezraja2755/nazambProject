import React from "react";
import { Link } from "react-router-dom";
import { Box } from "@mui/system";
import logo from "../Images/logo.png";
import Boxes from "./Navlog.styled";

function HomeMainNavbar() {
  // const location = useLocation();

  return (

    <Boxes>
      <img src={logo} alt="logo" />
      <Box style={{ display: "flex", gap: "30px" }}>
        <Link
          style={{
            textDecoration: "none",
            color: "#1D9BD6",
          }}
          to="/"
        >
          {" "}
          Home
          {" "}
        </Link>

        <Link
          style={{
            textDecoration: "none",
            color: "#1D9BD6",
          }}
          to="/Login"
        >
          {" "}
          Login
          {" "}
        </Link>

        <Link
          style={{
            textDecoration: "none",
            color: "#1D9BD6",
            borderBottom: "4px solid #64C4BC",
            borderRadius: "1px",
          }}
          to="/Signup"
          // to={location.pathname === "/Signup" ? "/Login" : "/Signup"}
        >
          Signup
          {/* {location.pathname === "Signup" ? "Login" : "Signup"} */}
          {" "}
        </Link>
      </Box>
    </Boxes>

  );
}

export default HomeMainNavbar;
