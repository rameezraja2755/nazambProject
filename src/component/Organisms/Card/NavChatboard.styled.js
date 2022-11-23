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

export { TitleBox, Typo, SudoContainer };
