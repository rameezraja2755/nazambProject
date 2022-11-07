import React, { useState, useEffect } from "react";
// import Button from '@mui/material/Button';
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Imb from "../../Images/boy.jpg";
import Imc from "../../Images/g1.png";

import Imf from "../../Images/g3.png";
import Navbar from "./Navbar";

import {
  Sidebar,
  SidebarCard,
  Avter,
  InnerContent,
  Read,
  Boxes,
} from "./Chat.styled";

const Data = [
  {
    id: 1,
    usertype: "Marilyn Benson",
    msg: "Lorem Ipsum has been the industry's standard dummy text ever",
    timestamp: "10:00am",
    now: "Now ",
    unread: "22",
    image: Imb,
  },
  {
    id: 2,
    usertype: "Julio Barrett",
    msg: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    timestamp: "10:05am",
    now: "Now ",
    unread: " 99+",
    image: Imc,
  },
  {
    id: 4,
    usertype: "Oleh Sheptytskyi",
    msg: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    unread: 2,
    timestamp: "10:20am",
    now: "Now ",
    image: Imf,
  },
  {
    id: 5,
    usertype: "Lonnie Gardner",
    msg: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    timestamp: "10:40am",
    now: "10:40am",
    // unread: 22,
    image: Imf,
  },
  {
    id: 4,
    usertype: "Maurice Wolfe",
    msg: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    // unread: 22,
    timestamp: "10:20am",
    now: "10:40am",
    image: Imf,
  },
  {
    id: 5,
    usertype: "Lonnie Young",
    msg: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    timestamp: "10:40am",
    now: "10:40am",
    // unread: 22,
    image: Imb,
  },
];

function Chat() {
  const [Msg] = useState("");
  useEffect(() => {
    // show();
  }, [Msg]);
  return (
    <div className="chat">
      <Navbar />
      {Data.map((item) => (
        <Sidebar>
          <SidebarCard>
            <Avter>
              <Avatar src={item.image} />
            </Avter>
            <InnerContent>
              <Boxes>
                <Typography variant="subtitle1">{item.usertype}</Typography>
                <Typography variant="subtitle2" sx={{ ml: "80px" }}>
                  {item.now}
                </Typography>
                {item.unread && <Read>{item.unread}</Read>}
              </Boxes>
              <Typography variant="subtitle2">{item.msg}</Typography>
              {/* <Time>{item.timestamp}</Time> */}
            </InnerContent>
          </SidebarCard>
        </Sidebar>
      ))}

      {/* <input
        style={{width: "80%"}}
        placeholder="Type your reply!"
        value={Msg}
        onChange={(e) => setMsg(e.target.value)}
      ></input>
      <Button
        variant="contained"
        type="submit"
        onSubmit={handleSubmit}
        endIcon={<SendIcon />}
      >
        Send
      </Button> */}
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
