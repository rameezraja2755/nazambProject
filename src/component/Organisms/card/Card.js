import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {SC_Card,SB_Card,SD_Card } from "./Card.styled";

export default function BasicCard() {
  return (
    <>
      {/* <Boxes> */}
      <SC_Card>
     
        <Typography variant='body2'>
        The process is usually completed by a group of people with different 
        skills and training—e.g. industrial designers, field experts 
        (prospective users), engineers(for engineering design aspects), 
        depending upon the nature and type of the product involved.
        </Typography>
  
      </SC_Card>
      <SB_Card >
        <Typography variant='body2'>
    Option 1 with more text that fills one line
        </Typography>
      </SB_Card>

      <SD_Card>

        <Typography variant='body2'>
    Option 2
        </Typography>
      </SD_Card> 

    </>
  );
}
