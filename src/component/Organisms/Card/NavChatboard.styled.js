import { Typography } from "@mui/material";
import { styled, Box } from "@mui/system";

const TitleBox = styled(Box)(({ theme }) => ({
  height: "49px",
  width: "100%  ",
  borderRadius: "0px",
  border: `1px solid ${theme.palette.primary.main}`,

}));

const Typo = styled(Typography)({
  fontFamily: " Poppins",
  fontSize: "14px",
  fontWeight: " 600",
  lineHeight: "20px",
  letterSpacing: " 0em",
  textAlign: "left",
  height: "20px",
  width: "144px",
  padding: "16px",
  top: "16px",
  borderRadius: "0px",

});
const SudoContainer = styled(Typography)({
  color: "#64C4BC",
  textAlign: "center",
  width: "100%",
  position: "relative",
  marginTop: "20px",

  "&::before": {
    content: "''",
    display: " block",
    width: " 530px",
    height: "1px",
    color: "#64C4BC",
    background: "#64C4BC",
    left: "0",
    top: "50%",
    position: "absolute",
  },
  "&::after": {
    content: "''",
    display: " block",
    width: " 530px",
    height: "1px",
    color: "#64C4BC",
    background: "#64C4BC",
    right: "0",
    top: "50%",
    position: "absolute",
  },

});

const MyRoom = styled("div")({
  backgroundColor: "#F7FAFD",
  height: "auto",
  width: "100%",

});
const ContractConditions = styled("div")({

  height: "500px",
  width: " 352px",
  marginLeft: "35px",
  marginTop: " 50px",
  borderRadius: "12px",
  background: "#FFFFFF",
});
const Room = styled("div")({

});
const RoomBox = styled("div")({
  display: "flex",
  justifyContent: "space-between",

});
const Date = styled(Typography)({
  marginRight: "100px",

});
const IconBox = styled("div")({
  display: "flex",
  gap: "12px",
  marginLeft: "15px",

});
const CheckIn = styled("div")({
  display: "flex",
  justifyContent: "space-around",

});
const Month = styled("div")({
  display: "flex",
  justifyContent: "space-around",
});
const ContractPayment = styled("div")({
  display: "flex",
  marginTop: "50px",
  gap: "40px",
});
const PaymentsBox = styled("div")({
  height: "500px",
  width: " 653px",
  left: "415px",
  top: "27px",
  borderRadius: "12px",
  textAlign: "center",
  justifyContent: "space-around",
  alignItems: "center",
  background: "#FFFFFF",
  marginTop: "50px",

});
const PaymentsParent = styled("div")({
  display: "flex",
  justifyContent: "space-around",
  textAlign: "center",
  alignItems: "center",

});
const Reference = styled("div")({
  // textAlign: "center",
  // alignItems: "center",
  // justifyContent: "center",

});
const Content = styled("div")({
  paddingLeft: "40px",
  lineHeight: "30px",

});
const UsefulInfo = styled("div")({
  height: "384px",
  width: "1037px",
  left: "35px",
  top: "464px",
  borderRadius: "12px",
  margin: "50px",
  background: "#FFFFFF",

});
const CheckedIn = styled("div")({
  display: "flex",
  marginTop: "20px",
});
const Text = styled("div")({

});
const Img = styled("div")({
  justifyContent: "center",
  alignItems: "center",
  margin: "12px",

});
const Typoo = styled("div")({
  margin: "30px",
});
const Accordions = styled("div")({
  position: "relative",

});
const InfoParent = styled("div")({
  display: "flex",

});
const Popup = styled("div")({
  // float: "right",
  position: "absolute",
  bottom: "0",
  right: "5px",

});
const Accodiv = styled("div")({
  display: "flex",

});
export {
  TitleBox, Typo, SudoContainer, MyRoom, ContractConditions, Room,
  RoomBox, Date, IconBox, CheckIn, Month, ContractPayment, Reference,
  PaymentsBox, PaymentsParent, Content, UsefulInfo, Popup,
  CheckedIn, Text, Img, Typoo, Accordions, InfoParent, Accodiv,
};
