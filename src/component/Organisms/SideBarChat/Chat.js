import React, {
// useState,
// useEffect,
} from "react";
import { nanoid } from "nanoid";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";

import {
  doc, serverTimestamp, setDoc, query, where, collection, getDocs,
} from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import Imb from "../../Images/boy.jpg";
import Navbar from "./Navbar";
import { db } from "../../../FirebaseConfig";
import {
  Sidebar,
  SidebarCard,
  Avter,
  InnerContent,
  // Read,
  Boxes,
} from "./Chat.styled";

import { useAuth } from "../../../new_providerr/AuthProvider/index";

function Chat() {
  const { firestoreUsers, userId } = useAuth();
  const navigate = useNavigate();
  // const location = useLocation();

  console.log(firestoreUsers, "firestore user in chat pg");

  // console.log(location, "location");

  // const [firestoreUsers, setFirestoreUsers] = useState([]);
  // console.log(firestoreUsers, "state");

  // useEffect(
  //   () => onSnapshot(collection(db, "users"), (snapshot) => {
  // setFirestoreUsers(snapshot.docs.map((doc) => doc.data()))}),
  //   [],
  // );

  // // const userCollectionRef = collection(db, "users");
  // const getUsers = async () => {
  //   try {
  //     const firestoreData = await getDocs(collection(db, "users"));
  //     // console.log(firestoreData, "khkjhk");
  //     firestoreData?.doc?.map((doc) => setFirestoreUsers((pre) => [...pre,
  //       { ...doc.data(), id: doc.id }]));
  //     console.log(firestoreData.docs, "useeffect firestoredata");
  //     console.log(firestoreUsers, "state ");
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const handleSelect = async (selectedId) => {
  // chk if group already exists or not

    try {
      // const combinedId = selectedId > userId ? selectedId + userId : userId + selectedId;
      console.log("chatttttttt pg", selectedId, userId);
      const q = query(collection(db, "chats"), where("participants", "==", [userId, selectedId]));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((res) => {
      // doc.data() is never undefined for query doc snapshots
        console.log(res, " => chatpg", res.data());

        navigate(`/chat/${res.id}`, { replace: true });
      });
      if (querySnapshot.empty) {
      // create chat

        const id = nanoid();
        await setDoc(doc(db, "chats", id), {
          // messages: [],
          participants: [userId, selectedId],
          date: serverTimestamp(),
          initiatedBy: userId,

        });
        navigate(`/chat/${id}`, { replace: true });
      }
    } catch (error) {
      console.log(error, "error");
    }

    // const res = await getDoc(doc(db, "chats"));
    // try {

    // } catch (err) {
    //   console.log(err, "error in line 96");
    // }
  };
  return (
    <div className="chat">
      <Navbar />

      { firestoreUsers?.map((item) => (
        <Sidebar>
          <SidebarCard>
            <Avter>
              <Avatar src={Imb} />
            </Avter>
            <InnerContent onClick={() => handleSelect(item.id)}>
              <Boxes>
                <Typography variant="subtitle1">{item.name}</Typography>
                {/* <Typography variant="subtitle2" sx={{ ml: "80px" }}>
                  {item.now}
                </Typography> */}
                {/* {item.unread && <Read>{item.unread}</Read>} */}
              </Boxes>
              <Typography variant="subtitle2">{item.emailId}</Typography>

              {" "}
              {/* <Time>{item.timestamp}</Time> */}
            </InnerContent>
          </SidebarCard>
        </Sidebar>
      ))}

    </div>
  );
}
export default Chat;
