import React from "react";
// import {Link} from "react-router-dom";
import { Box } from "@mui/system";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
// import { Typography } from '@mui/material';
import AddCommentOutlinedIcon from "@mui/icons-material/AddCommentOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import { useAuth } from "../../../new_providerr/AuthProvider";

// import {Boxes} from "./Navbar.styled.js"

function Navbar() {
  const { logoutUser, userName } = useAuth();
  const shortNameResult = [];

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    console.log(userName, "userName in chat");
    console.log(shortNameResult, "result");
  };

  const shortName = (str) => {
    str?.split(" ")?.map((word) => (word.charAt(0) !== "" ? shortNameResult.push(word.charAt(0)) : ""));
    return shortNameResult;
  };

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
          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            sx={{
              backgroundColor: "#D7E7FE", width: "38px", height: "38px", borderRadius: "20px", display: "flex", justifyContent: "center", color: "#1D9BD6", marginLeft: "10px", alignItems: "center",
            }}
          >
            {shortName(userName)}
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={() => logoutUser()}>Logout</MenuItem>
          </Menu>
          {/* <Box style={{backgroundColor: "#D7E7FE", width: "38px", height: "38px",
           borderRadius: "20px",display: "flex", justifyContent: "center",
           color: "#1D9BD6", marginLeft: "10px", alignItems: "center",
          }}
          >
            OS
          </Box> */}
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
