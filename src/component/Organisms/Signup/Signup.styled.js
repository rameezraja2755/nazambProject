import { styled, Box } from "@mui/system";

const Container = styled(Box)({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  textAlign: "center",
  alignItems: "center",
  height: "100vh",
});

const AlertBox = styled(Box)({
  width: "30%",
  marginLeft: "35%",
});
export { Container, AlertBox };
