import { styled } from "@mui/system";
import {
  Card, Box, Button,
} from "@mui/material";

// const SudoContainer = styled(Typography)({
//   color: "#64C4BC",
//   textAlign: "center",
//   width: "100%",
//   position: "relative",
//   marginTop: "20px",

//   "&::before": {
//     content: "''",
//     display: " block",
//     width: " 400px",
//     height: "1px",
//     color: "#64C4BC",
//     background: "#64C4BC",
//     left: "0",
//     top: "50%",
//     position: "absolute",
//   },
//   "&::after": {
//     content: "''",
//     display: " block",
//     width: " 400px",
//     height: "1px",
//     color: "#64C4BC",
//     background: "#64C4BC",
//     right: "0",
//     top: "50%",
//     position: "absolute",
//   },

// });

const SccCard = styled(Card)({
  height: " 100px",
  width: " 400px",
  borderRadius: "8px",
  padding: "8px",
  backgroundColor: "#1D9BD6",
  // boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
});
const SbbCard = styled(Card)({
  height: "20px", width: " 390px", marginTop: "4px", borderRadius: "8px", padding: " 8px 12px 8px 12px", backgroundColor: "#1D9BD6", boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px", gap: "10px", color: "white",

});
const SddCard = styled(Card)({
  height: "20px", width: " 390px", marginTop: "8px", borderRadius: "8px", padding: " 8px 12px 8px 12px", backgroundColor: "#1D9BD6", boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px", gap: "10px", color: "white",

});
const SdiCard = styled(Card)({
  height: "20px", width: " 450px", marginTop: "50px", borderRadius: "10px", padding: " 8px 12px 8px 12px", boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px", gap: "10px", color: "white",
});
const SbiCard = styled(Card)({
  height: "40px", width: " 460px", marginTop: "8px", borderRadius: "10px", padding: " 8px", boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px", gap: "10px", color: "white",
});

const Boxes = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  height: "20px",
  width: " 460px",
  marginTop: "6px",

});
const BlueBoxes = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  height: "20px",
  width: " 410px",
  marginTop: "6px",

});
const Date = styled("Date")({
  display: " flex",
  flexDirection: " row",
  justifyContent: "flex-start",
  alignItems: " center",
  padding: "35px 4px",
  gap: "16px",
});
const InputCard = styled("div")({

  width: " 500px",
  marginTop: "100px",
  height: "100px",
  borderRadius: "8px",
  padding: " 8px",
  boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
  backgroundColor: "#FFFFFF",

});
const IconBox = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  color: "black",
  height: " 44px",
  width: "500px",
  borderRadius: "0px",
  boxShadow: "unset",

});
const Input = styled("div")({
  border: "none",
  height: "30px",
  width: "500px",
  borderRadius: "0px",
  padding: "5px",
  marginTop: "90px",
  boxShadow: "0px",

});
const Btn = styled(Button)({
  background: "linear-gradient(102.81deg, #1D9BD6 -2.54%, #64C4BC 100%)",
  height: "28px",
  width: " 54px",
  color: "white",
  borderRadius: " 4px",
  margin: " 7px 17px 7px 27px ",
  padding: "4px 10px 4px 10px",
});
const mates = styled(Card)({
  display: " flex",
  flexDirection: "column",
  alignItems: " center",
});
const Flatmates = styled(Card)({
  backgroundColor: "#F7FAFD",
  display: " flex",
  flexDirection: "column",
  boxShadow: "none",

});

const User = styled("div")({

  display: " flex",
  justifyContent: "flex-end",
  flexDirection: "column",
  alignItems: "flex-end",
  padding: "31px",

});
const Icon = styled(Box)({
  gap: "20px",
  display: "flex",
  alignItems: "center",

});
const Clt = styled("div")({
  padding: "30px 32px",

});

const Sidebar = styled(Box)({
  width: "350px",
  height: "auto",
  boxSizing: "border-box",
  background: "#FFFFFF",
  borderLeft: "1px solid #E4E5E7",

});
const Flatematebox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: " flex-start",
  padding: " 10px 16px",
  gap: "12px",
  width: "310px",
  // height: "49px",
  background: " #FFFFFF",
  borderWidth: "0px 0px 1px 1px",
  borderStyle: "solid",
  borderColor: "#E4E5E7",
});

const SidebarCard = styled("Card")({
  display: "flex",
  height: "80px",
  width: "320px",
  borderRadius: "0px",
  padding: "12px",

});
const Avter = styled("ave")({
  width: "50px",
  height: "50px",
  margin: "10px 5px",
});
const InnerContent = styled("div")({
  margin: "8px", padding: "0",
});
const Rightbar = styled("div")({
  width: "350px",
  height: "auto",
  boxSizing: "border-box",
  background: "#FFFFFF",
  border: "1px solid #E4E5E7",

});
const FullFlatmates = styled("div")({
  display: "grid",
  gridTemplateColumns: " 8fr 2fr",
  backgroundColor: "#F7FAFD",
  padding: "0px",

});

export {
  SccCard, SbbCard, SddCard, Boxes, Date,
  SdiCard, SbiCard, IconBox, Btn, mates,
  Flatmates, User, Clt, Input, Sidebar,
  SidebarCard, Rightbar, Flatematebox, FullFlatmates,
  Avter, BlueBoxes, Icon, InputCard,
  InnerContent,

};
