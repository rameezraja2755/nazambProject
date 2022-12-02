import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import {
  collection,
  // getDocs,
  onSnapshot,
} from "firebase/firestore";
import SideBarChat from "../../Organisms/SideBarChat/Chat";
import MainContainer from "./ChatBoard.styled";
import Chatboard from "../../Organisms/Card/NavChatboard";
// import CheatBox from "../../Organisms/CheatBox/CheatBox";
import { useAuth } from "../../../new_providerr/AuthProvider";
import { db } from "../../../FirebaseConfig";

function ChatBoard() {
  const { userId, error } = useAuth();
  const navigate = useNavigate();
  const [firestoreUsers, setFirestoreUsers] = useState([]);
  console.log(firestoreUsers, "state");

  useEffect(() => {
    if (!userId) {
      navigate("/");
    }

    // console.log("navigatee", user, error);
    // } else if (error) {
    //   <Alert severity="error">Error detected!</Alert>;
    // }
  }, [userId, error]);

  useEffect(() => {
    onSnapshot(collection(db, "users"), (snapshot) => {
      snapshot.docs.forEach((doc) => (setFirestoreUsers((pre) => [...pre, doc.data()])));
    });
  }, []);

  return (
    <MainContainer>
      <Box>
        <SideBarChat firestoreUsers={firestoreUsers} />
      </Box>
      <Box>
        <Chatboard />
      </Box>
    </MainContainer>
  );
}

export default ChatBoard;
