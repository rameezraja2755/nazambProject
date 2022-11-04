import { styled, Box } from "@mui/system";
import { Button, Typography, Card } from "@mui/material";
import Avatar from "@mui/material/Avatar";

// const MainBox = styled(Box)({
//
// });
const SB_Card = styled(Card)({
  height: " 473px",
  width: "347px",
  left: "0px",
  Top: "0px",
  borderRadius: "6px",
});
const SC_button = styled(Button)({
  height: "40px",
  width: "144px",
  left: "0px",
  top: " 8px",
  borderRadius: "8px",
  backgroundColor:
    "linear-gradient(100.22deg, #1D9BD6 -16.25%, #5AC3B8 148.05%)",
});
const SidebarCard = styled("Card")({
  display: "flex",
  height: "80px",
  width: "320px",
  borderRadius: "0px",
  padding: "12px",
  border: " 1px solid #E4E5E7",
  backgroundColor: "#64C4BC",
});
const InnerContent = styled("CardContent")({
  margin: "8px",
  padding: "0",
});
const Read = styled("Read")({
  height: "20px",
  width: "20px",
  left: "34px",
  top: "0px",
  borderRadius: "4px",
  padding: "2px 6px 2px 6px",
});
const Boxes = styled("Boxes")({
  display: "flex",
  marginLeft: "30%",
  width: "20px",
});

const SD_avatar = styled(Avatar)({
  backgroundColor: "white",
});

const Typo = styled(Typography)({
  color: "white",
  fontFamily: " Poppins",
  fontSize: "18px",
  fontWeight: "500",
  lineHeight: "24px",
  letterSpacing: "-0.01em",
  textAlign: "left",
});
const Boxx = styled(Box)({
  height: "36px",
  width: "278px",
  borderRadius: " 8px",
  padding: " 8px 12px 8px 12px",
  backgroundColor: "#64C4BC",
  margin: "auto",
  marginTop: "20px",
});
const Tygraphy = styled(Typography)({
  width: "150%",
});
const Boxies = styled(Box)({
  height: "16px",
  width: " 278px",
  borderRadius: "0px",
  alignItems: "flex-end",
  display: "flex",
  justifyContent: "end",
  margin: "20px 40px",
  color: "#E4E5E7",
  Weight: "400",
  Size: "12px",
  LineHeight: "16px",
});
const Boxieses = styled(Box)({
  height: "36px",
  width: "292px",
  marginLeft: "11px",
  borderRadius: "8px",
  padding: " 8px",
  backgroundColor: "#FFFFFF",
});
const Bxxx = styled(Box)({
  height: " 40px",
  width: "325px",
  marginLeft: "11px",
  marginTop: "50px",
  borderRadius: "6px",
  backgroundColor: "#FFFFFF",
  boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
});

const Btn = styled(Button)({
  background: "linear-gradient(102.81deg, #1D9BD6 -2.54%, #64C4BC 100%)",
  height: "28px",
  width: " 54px",
  color: "white",
  borderRadius: " 4px",
  margin: "5px",
  padding: "4px 10px 4px 10px",
});

export {
  SC_button,
  SB_Card,
  InnerContent,
  SidebarCard,
  Read,
  Boxes,
  SD_avatar,
  Typo,
  Boxx,
  Tygraphy,
  Boxies,
  Boxieses,
  Bxxx,
  Btn,
};
