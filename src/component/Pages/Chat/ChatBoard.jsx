import React, { useEffect } from "react";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import SideBarChat from "../../Organisms/SideBarChat/Chat";
import MainContainer from "./ChatBoard.styled";
import CheatBox from "../../Organisms/CheatBox/CheatBox";
import { useAuth } from "../../../new_providerr/AuthProvider";

function ChatBoard() {
  const { user, error } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
    // console.log("navigatee", user, error);
    // } else if (error) {
    //   <Alert severity="error">Error detected!</Alert>;
    // }
  }, [user, error]);
  return (
    <MainContainer>
      <Box>
        <SideBarChat />
      </Box>
      <Box>
        <CheatBox />
      </Box>
    </MainContainer>
  );
}

export default ChatBoard;
