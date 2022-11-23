import { styled } from "@mui/system";
import { Button } from "@mui/material";

const MainContainer = styled("div")({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  // textAlign: "center",
  alignItems: "center",
  height: "85vh",
});
const Btn = styled(Button)({
  background: "linear-gradient(102.81deg, #1D9BD6 -2.54%, #64C4BC 100%)",
  height: "28px",
  width: " 94px",
  color: "white",
  borderRadius: " 4px",
  margin: "10px",
  padding: "20px 10px 20px 10px",
  alignItems: "center",
});

export { MainContainer, Btn };
