import React from "react";
import { Box } from "@mui/material";
import SideBarChat from "../../Organisms/SideBarChat/Chat";
import MainContainer from "./ChatBoard.styled";
import CheatBox from "../../Organisms/CheatBox/CheatBox";

function ChatBoard() {
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
