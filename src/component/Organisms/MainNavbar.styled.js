import { Box } from "@mui/material";
import { styled } from "@mui/system";
import { Link } from "react-router-dom";

const Boxes = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
  padding: "0px",
  gap: "50%",
});

const Innerbox = styled(Box)({
  display: "flex",
  gap: "30px",
});

const InnerLink = styled(Link)({
  textDecoration: "none",
  color: "#1D9BD6",
  borderBottom: "4px solid #64C4BC",
  borderRadius: "1px",
});

export { Boxes, Innerbox, InnerLink };
