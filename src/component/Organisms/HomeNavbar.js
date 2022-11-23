import React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";

function HomeNavbar() {
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
          borderBottom: "5px solid #1D9BD6",
        }}
        to="/Chat"
      >
        {" "}
        Chat
        {" "}
      </Link>

      <Link
        style={{
          textDecoration: "none",
          color: "#1D9BD6",
          borderBottom: "5px solid #1D9BD6",
        }}
        to="/Signup"
      >
        Signup
      </Link>
    </Box>
  );
}

export default HomeNavbar;
