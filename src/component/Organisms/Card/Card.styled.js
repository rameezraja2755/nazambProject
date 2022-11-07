import { styled } from "@mui/system";
import { Card } from "@mui/material";

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
export { ScCard, SbCard, SdCard };
