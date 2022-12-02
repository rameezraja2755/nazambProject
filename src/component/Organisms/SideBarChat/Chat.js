import React, {
// useState,
// useEffect,
} from "react";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
// import {
//   collection,
//   // getDocs,
//   onSnapshot,
// } from "firebase/firestore";

import Imb from "../../Images/boy.jpg";
// import Imc from "../../Images/g1.png";

// import Imf from "../../Images/g3.png";
import Navbar from "./Navbar";

import {
  Sidebar,
  SidebarCard,
  Avter,
  InnerContent,
  // Read,
  Boxes,
} from "./Chat.styled";
// import { db } from "../../../FirebaseConfig";

// const Data = [
//   {
//     id: 1,
//     usertype: "Marilyn Benson",
//     msg: "Lorem Ipsum has been the industry's standard dummy text ever",
//     timestamp: "10:00am",
//     now: "Now ",
//     unread: "22",
//     image: Imb,
//   },
//   {
//     id: 5,
//     usertype: "Lonnie Young",
//     msg: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
//     timestamp: "10:40am",
//     now: "10:40am",
//     // unread: 22,e we actually pass our data along with t
//     image: Imb,
//   },
// ];

function Chat(firestoreUsers) {
  console.log(firestoreUsers, "firestore user");
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

  // useEffect(() => {
  //   getUsers();
  //   console.log(firestoreUsers, "firestoreusersss state");
  //   // console.log(firestoreData, "firest data");
  // }, []);
  return (
    <div className="chat">
      <Navbar />

      { firestoreUsers?.firestoreUsers?.map((item) => (
        <Sidebar>
          firestoreUsers
          <SidebarCard>
            <Avter>
              <Avatar src={Imb} />
            </Avter>
            <InnerContent>
              <Boxes>
                <Typography variant="subtitle1">{item.name}</Typography>
                {/* <Typography variant="subtitle2" sx={{ ml: "80px" }}>
                  {item.now}
                </Typography> */}
                {/* {item.unread && <Read>{item.unread}</Read>} */}
              </Boxes>
              <Typography variant="subtitle2">{item.email}</Typography>

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

// white_check_mark
// eyes
// raised_hands

// const bull = (
//   <Box>

//   </Box>
// );

// export default function BasicCard() {
//   return (
//     <Sidebar>
//     <SidebarCard>
//         <Avter>
//             <Avatar src={ima}/>
//           </Avter>
//       <InnerContent>
//         <Typography sx={{ fontSize: 18 ,color:"black", fontWeight:"bold"}}>
//           Marilyn Benson
//         </Typography>
//         <Typography sx={{fontSize: 13 }} color="text.secondary">
//           Lorem absum has been the industry's standared dummy text ever</Typography>

//       </InnerContent>

//     </ SidebarCard>
//     </Sidebar>
//       );
//     }
