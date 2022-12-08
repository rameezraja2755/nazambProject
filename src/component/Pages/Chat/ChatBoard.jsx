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

import { useAuth } from "../../../new_providerr/AuthProvider";
import { db } from "../../../FirebaseConfig";
import {
  FIREBASE_USERS,
  // G_SIGN_IN,
} from "../../../new_providerr/constants";

function ChatBoard() {
  const { userId, error, dispatch } = useAuth();
  const navigate = useNavigate();
  const [firestoreUsers, setFirestoreUsers] = useState([]);

  console.log(firestoreUsers, "state");

  useEffect(() => {
    if (!userId) {
      navigate("/");
    }
  }, [userId, error]);

  useEffect(() => {
    const arr = [];
    onSnapshot(collection(db, "users"), (snapshot) => {
      snapshot.docs.forEach((doc) => (arr.push(doc.data())));
      setFirestoreUsers(arr);
    });
  }, []);

  useEffect(() => {
    dispatch({
      type: FIREBASE_USERS,
      firestoreUserList: firestoreUsers,
    });
  }, [firestoreUsers]);

  return (
    <MainContainer>
      <Box>
        <SideBarChat />
      </Box>
      <Box>
        <Chatboard />
      </Box>
    </MainContainer>
  );
}

export default ChatBoard;
