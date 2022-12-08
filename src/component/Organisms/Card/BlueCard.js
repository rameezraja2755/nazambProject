import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import Avatar from "@mui/material/Avatar";
import {
  doc, serverTimestamp,
  collection, onSnapshot, addDoc,
} from "firebase/firestore";
import { useParams } from "react-router-dom";

import Imc from "../../Images/g1.png";
import * as SC from "./BlueCard.styled";
import { useAuth } from "../../../new_providerr/AuthProvider";
import { db } from "../../../FirebaseConfig";

export default function BasicCard() {
  const { firestoreUsers, userId } = useAuth();

  const { chatId } = useParams();
  const [text, setText] = useState("");
  const [fireChat, setFireChat] = useState([]);
  const userRef = doc(db, "users", userId);

  const handleSendMessage = async (val) => {
    console.log(text, "text");
    await addDoc(collection(db, "chats", chatId, "messages"), {
      date: serverTimestamp(),
      // initiatedBy: userId,
      message: val,
      owner: userRef,
      ownerId: userId,
    });
    setText("");
  };

  const handleValue = (event) => {
    setText(event.target.value);
  };

  useEffect(() => {
    onSnapshot(collection(db, "chats", chatId, "messages"), (snapshot) => {
      const arr = [];
      console.log(snapshot.docs);
      snapshot.docs.forEach((res) => (arr.push(res.data())));
      setFireChat(arr);
    });
  }, []);

  console.log(fireChat, "firechat");

  return (
    <SC.FullFlatmates>
      <SC.Flatmates>
        <SC.User>

          {fireChat.map((item) => (

            <SC.SbbCard>
              <Typography variant="body3">
                {item.message}
              </Typography>
            </SC.SbbCard>
          ))}

        </SC.User>

        {/* chat input at bottom */}
        <SC.InputCard>
          <input type="text" name="name" value={text} onChange={handleValue} placeholder=" type your msg here.." style={{ width: "480px", height: "44px", border: "none" }} />

          <SC.IconBox>
            <SC.Icon>
              <AddIcon sx={{ color: "#3chatId185FC", gap: "20px" }} />
              <SentimentSatisfiedAltIcon />
            </SC.Icon>
            <Box>
              <SC.Btn type="submit" onClick={() => { handleSendMessage(text); }}>Send</SC.Btn>

            </Box>
          </SC.IconBox>

        </SC.InputCard>

      </SC.Flatmates>

      {/* //right sidebar users in chatroom */}

      <SC.Rightbar>
        <SC.Sidebar>
          <SC.Flatematebox>
            <Typography variant="h3">FLATMATES</Typography>
          </SC.Flatematebox>

          { firestoreUsers?.map((item) => (
            <SC.SidebarCard>
              <SC.Avter>
                <Avatar src={Imc} />
              </SC.Avter>
              <SC.InnerContent>

                <Typography sx={{ fontSize: 18, color: "black", fontWeight: "bold" }}>
                  {item.name}
                </Typography>
                <Typography sx={{ fontSize: 13 }} color="text.secondary">
                  {item.email}
                </Typography>

              </SC.InnerContent>

            </SC.SidebarCard>
          ))}

        </SC.Sidebar>

      </SC.Rightbar>
    </SC.FullFlatmates>
  );
}
