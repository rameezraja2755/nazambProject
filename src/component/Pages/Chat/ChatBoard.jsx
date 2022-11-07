import React from "react";
import Chat from "../../Organisms/Card/Card";
import SideBarChat from "../../Organisms/SideBarChat/Chat";

function ChatBoard() {
  return (
    <div>
      <SideBarChat />
      <Chat />
    </div>
  );
}

export default ChatBoard;
