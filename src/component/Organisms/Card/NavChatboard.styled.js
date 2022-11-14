import { Typography, Card } from "@mui/material";
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
//   margin: "0 auto",
  // color: #228B22;
  textAlign: "center",
  width: "100%",
  position: "relative",

  "&::before": {
    content: "''",
    display: " block",
    width: " 350px",
    height: "1px",
    background: "#656D79",
    left: "0",
    top: "50%",
    position: "absolute",
  },
  "&::after": {
    content: "''",
    display: " block",
    width: " 380px",
    height: "1px",
    background: "#656D79",
    right: "0",
    top: "50%",
    position: "absolute",
  },

});
const ScCard = styled(Card)({
  height: " 100px",
  width: " 400px",
  borderRadius: "8px",
  padding: " 30px 35px  35px",
  backgroundColor: "#FBCD41",
  boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
});
const SbCard = styled(Card)({
  height: "20px", width: " 400px", marginTop: "2px", borderRadius: "8px", padding: " 30px 35px 30px 35px", backgroundColor: "#FBCD41", boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px", gap: "10px",

});
const SdCard = styled(Card)({
  height: "20px", width: " 400px", marginTop: "2px", borderRadius: "8px", padding: " 30px 35px 30px 35px", backgroundColor: "#FBCD41", boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px", gap: "10px",

});

const SccCard = styled(Card)({
  height: " 100px",
  width: " 400px",
  borderRadius: "8px",
  padding: " 30px 35px  35px",
  backgroundColor: "#1D9BD6",
  color: "white",
  boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
});
const SbbCard = styled(Card)({
  height: "20px", width: " 400px", marginTop: "2px", borderRadius: "8px", padding: " 30px 35px 30px 35px", backgroundColor: "#1D9BD6", boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px", gap: "10px", color: "white",

});
const SddCard = styled(Card)({
  height: "20px", width: " 400px", marginTop: "2px", borderRadius: "8px", padding: " 30px 35px 30px 35px", backgroundColor: "#1D9BD6", boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px", gap: "10px", color: "white",

});
const Boxes = styled(Box)({
  display: "flex",
  justifyContent: "space-between",

});
const Date = styled("Date")({
  display: " flex",
  flexDirection: " row",
  alignItems: " center",
  padding: "8px 0px",
  gap: "16px",
});
export {
  TitleBox, Typo, SudoContainer, ScCard, SbCard, SdCard, SccCard, SbbCard, SddCard, Boxes, Date,
};
