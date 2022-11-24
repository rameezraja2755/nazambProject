import React from "react";
import { Link, useLocation } from "react-router-dom";
import Box from "@mui/material/Box";

function HomeNavbar() {
  const location = useLocation();

  return (
    <Box>
      <Link
        style={{
          textDecoration: "none",
          color: "#1D9BD6",
          borderBottom: "5px solid #1D9BD6",
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
          borderBottom: "5px solid #1D9BD6",
        }}
        to="/login"
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
        to={location.pathname === "/Login" ? "/logout" : "/Login"}
      >
        {location.pathname === "/Login" ? "logout" : "Login"}
        {" "}
      </Link>

    </Box>
  );
}

export default HomeNavbar;
