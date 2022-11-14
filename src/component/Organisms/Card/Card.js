import * as React from "react";

import Typography from "@mui/material/Typography";
import { ScCard, SbCard, SdCard } from "./Card.styled";
// import Navbar from "./NavChatboard";

export default function BasicCard() {
  return (
    <>
      {/* <Boxes> */}
      {/* <Navbar /> */}
      <ScCard>

        <Typography variant="body2">
          The process is usually completed by a group of people with different
          skills and training—e.g. industrial designers, field experts
          (prospective users), engineers(for engineering design aspects),
          depending upon the nature and type of the product involved.
        </Typography>

      </ScCard>
      <SbCard>
        <Typography variant="body2">
          Option 1 with more text that fills one line
        </Typography>
      </SbCard>

      <SdCard>

        <Typography variant="body2">
          Option 2
        </Typography>
      </SdCard>

    </>
  );
}
