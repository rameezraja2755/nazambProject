import React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";

function NavbarBlue() {
  return (
    <Box>
      <Link style={{ textDecoration: "none", color: "#1D9BD6", borderBottom: "5px solid #1D9BD6" }} to="/"> Home </Link>

      <Link style={{ textDecoration: "none", color: "#1D9BD6", borderBottom: "5px solid #1D9BD6" }} to="/Login"> Login </Link>

    </Box>

  );
}

export default NavbarBlue;
