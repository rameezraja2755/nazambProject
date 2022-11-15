import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Box } from "@mui/system";
import logo from "../Images/logo.png";
import Boxes from "./Navlog.styled";

function HomeMainNavbar() {
  const location = useLocation();

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
          to="/how is works"
        >
          {" "}
          How it Works
          {" "}
        </Link>

        <Link
          style={{
            textDecoration: "none",
            color: "#1D9BD6",
            borderBottom: "4px solid #64C4BC",
            borderRadius: "1px",
          }}
          to={location.pathname === "/Login" ? "/Signup" : location.pathname === "/Signup" && "/Login"}
        >
          {location.pathname === "/Login" ? "Signup" : location.pathname === "/Signup" && "Login"}
          {" "}
        </Link>
      </Box>
    </Boxes>

  );
}

export default HomeMainNavbar;
