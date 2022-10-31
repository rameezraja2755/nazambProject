import { styled } from "@mui/system";
import { CardContent } from "@mui/material";

const Sidebar = styled("sidebar")({
  width: "60%",
  height: "auto",
});

const SidebarCard = styled("Card")({
  display: "flex",
  height: "80px",
  width: "320px",
  borderRadius: "0px",
  padding: "12px",
  border: " 1px solid #E4E5E7",
});
const Avter = styled("ave")({
  width: "50px",
  height: "50px",
  margin: "10px 5px",
});
const InnerContent = styled( CardContent )({
  margin: "8px",padding:"0"
});
const Read = styled("Read")({
  
  height: "20px",
width: "20px",
left: "34px",
top: "0px",
borderRadius: "4px",
padding: "2px 6px 2px 6px",
// Gap:"8px",
backgroundColor:"#64C4BC",
color:"white"


})
const Boxes = styled("Boxes")({
  display:"flex",
  justifyContent:"space-between"

})
const Time = styled("Time")({
  height:"20px",
  width:"20px",
  // backgroundColor:"red"

})
export { Sidebar, SidebarCard, Avter, InnerContent,Time,Read,Boxes };
