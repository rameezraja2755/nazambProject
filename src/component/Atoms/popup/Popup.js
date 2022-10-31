// import * as React from 'react';
// import Popover from '@mui/material/Popover';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import MessageIcon from '@mui/icons-material/Message';
// import CloseIcon from '@mui/icons-material/Close';
// import {SC_button ,SB_Card,InnerContent ,Read, Boxes} from "./Popup.styled";
// import Avatar from "@mui/material/Avatar";

// export default function BasicPopover() {
//   const [anchorEl, setAnchorEl] = React.useState(null);

//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   const open = Boolean(anchorEl);
//   const id = open ? 'simple-popover' : undefined;

//   return (
//     <div>
//       <SC_button aria-describedby={id} variant="contained" onClick={handleClick}>
//         <MessageIcon/>
//       </SC_button>
//       <Popover
//         id={id}
//         open={open}
//         anchorEl={anchorEl}
//         onClose={handleClose}
//         anchorOrigin={{
//           vertical: 'bottom',
//           horizontal: 'left',
//         }}
//       >
//         <SB_Card>
//               <SidebarCard>
//                 <Avter>
//                     <Typography>
//                         OS
//                   </Typography> 
//                 </Avter>
//                 <InnerContent>
//                   <Boxes>
//                   <Typography variant="subtitle1">Oleh Sheptytskyi</Typography>
//                   <Typography variant="subtitle2">Admin of Palo’s students place</Typography>
//                   <Read><CloseIcon /></Read>
//                   </Boxes>
//                   <Typography variant="subtitle2">{item.msg}</Typography>
//                   {/* <Time>{item.timestamp}</Time> */}
//                 </InnerContent>
//               </SidebarCard>

//         </SB_Card>
//       </Popover>
//     </div>
//   );
// }
