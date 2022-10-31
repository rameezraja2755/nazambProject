import React, { useState, useEffect } from "react";
import InventoryIcon from "@mui/icons-material/Inventory";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
// import Button from '@mui/material/Button';
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import Avatar from "@mui/material/Avatar";
import ima from "../../../component/images/grl.jpg";
import imb from "../../../component/images/g5.jpg";
import imc from "../../../component/images/g1.png";
import imd from "../../../component/images/g2.png";
import ime from "../../../component/images/g3.png";
import imf from "../../../component/images/g5.jpg";
import {
  Sidebar,
  SidebarCard,
  Avter,
  InnerContent,
  Time,
  Read,
  Boxes,
} from "./Sidebar.styled";

const Chat = () => {
  const [Msg, setMsg] = useState("");
  const handleSubmit = (event) => {
    // event.preventDefault();
    let num = data.length;
    num = num + 1;
    console.log(Msg, "Msg");
    data.push({
      id: num,
      usertype: "reciever",
      msg: Msg,
      timestamp: "11:50am",
      now: "Now",
      unread: 22,
      image: Image,
    });
    //console.log(data, "data");
  };
  useEffect(() => {
    // show();
  }, [Msg]);
  return (
    <div className="chat">
      {data.map((item, text) => {
        return (
          <>
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
          </>
        );
      })}
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
};
export default Chat;

const data = [
  {
    id: 1,
    usertype: "Marilyn Benson",
    msg: "Lorem Ipsum has been the industry's standard dummy text ever",
    timestamp: "10:00am",
    now: "Now ",
    unread: "22",
    image: imb,
  },
  {
    id: 2,
    usertype: "Julio Barrett",
    msg: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    timestamp: "10:05am",
    now: "Now ",
    unread: " 99+",
    image: imc,
  },
  {
    id: 4,
    usertype: "Oleh Sheptytskyi",
    msg: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    unread: 2,
    timestamp: "10:20am",
    now: "Now ",
    image: imd,
  },
  {
    id: 5,
    usertype: "Lonnie Gardner",
    msg: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    timestamp: "10:40am",
    now: "10:40am",
    // unread: 22,
    image: ime,
  },
  {
    id: 4,
    usertype: "Maurice Wolfe",
    msg: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    // unread: 22,
    timestamp: "10:20am",
    now: "10:40am",
    image: imf,
  },
  {
    id: 5,
    usertype: "Lonnie Young",
    msg: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    timestamp: "10:40am",
    now: "10:40am",
    // unread: 22,
    image: imb,
  },
];
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
