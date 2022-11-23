import React from "react";
// import {Link} from "react-router-dom";
import { Box } from "@mui/system";
// import { Typography } from '@mui/material';
import AddCommentOutlinedIcon from "@mui/icons-material/AddCommentOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
// import {Boxes} from "./Navbar.styled.js"

function Navbar() {
  return (
    <Box style={{
      display: "flex", justifyContent: "center", TextAlign: "center", alignItems: "center",
    }}
    >
      <Box style={{
        width: "320px", height: "52px", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid #E8E8EA",
      }}
      >
        <Box className="NavbarLogo">
          <Box style={{
            backgroundColor: "#D7E7FE", width: "38px", height: "38px", borderRadius: "20px", display: "flex", justifyContent: "center", color: "#1D9BD6", marginLeft: "10px", alignItems: "center",
          }}
          >
            OS
          </Box>
        </Box>
        <Box style={{ display: "flex", gap: "15px", color: "#1D9BD6" }} className="NavbarContent">
          <AddCommentOutlinedIcon />
          <ChatOutlinedIcon />
          <MoreVertOutlinedIcon />
        </Box>
      </Box>
    </Box>
  );
}

export default Navbar;
