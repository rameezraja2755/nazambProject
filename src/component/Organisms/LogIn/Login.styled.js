import { styled, Box } from "@mui/system";

const Dash = styled("p")({
  margin: " 10px auto",
  textAlign: "center",
  fontFamily: "sans-serif",
  color: " #228B22",
  maxWidth: " 296px",
  position: "relative",

  "&::before": {
    content: "''",
    display: " block",
    width: " 130px",
    height: "1px",
    background: "#656D79",
    left: "0",
    top: "50%",
    position: "absolute",
  },
  "&::after": {
    content: "''",
    display: " block",
    width: " 130px",
    height: "1px",
    background: "#656D79",
    right: "0",
    top: "50%",
    position: "absolute",
  },
});
const Btn = styled("span")({
  display: "flex",
  marginLeft: "150px",
});

const MainContainer = styled(Box)({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  textAlign: "center",
  alignItems: "center",
  height: "85vh",
});

const GoogleBox = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const BoxImg = styled("img")({
  width: "30px",
  height: "30px",
});

const Imagediv = styled(Box)({
  width: "30px",
  height: "30px",
  background: "#EBEBEB",
  margin: "10px",
  padding: "10px",
  backgroundColor: "white",
  boxShadow: " rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
});

const Boxx = styled(Box)({
  alignItems: "start",
  textAlign: "start",
  margin: "17px 20px",
});

export {
  MainContainer, Dash, GoogleBox, BoxImg, Imagediv, Boxx, Btn,
};
