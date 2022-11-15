/* eslint-disable react/jsx-pascal-case */
/* eslint-disable linebreak-style */
import * as React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";

import MessageIcon from "@mui/icons-material/Message";
import CloseIcon from "@mui/icons-material/Close";
import * as SC from "./Popup.styled";
// import {
//   SC_Button,
//   SB_Card,
//   InnerContent,
//   SidebarCard,
//   Read,
//   Boxes,
//   Sd_Avatar,
//   Typo,
//   Boxx,
//   Tygraphy,
//   Boxies,
//   Boxieses,
//   Bxxx,
//   Btn,
// } from "./Popup.styled";

export default function BasicPopover() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <SC.ChatBtn
        aria-describedby={id}
        variant="contained"
        onClick={handleClick}
      >
        <MessageIcon />
      </SC.ChatBtn>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <SC.MainCard>
          <SC.SidebarCard>
            <SC.Sd_Avatar>
              <Typography>OS</Typography>
            </SC.Sd_Avatar>
            <SC.InnerContent>
              <SC.Typo variant="">Oleh Sheptytskyi</SC.Typo>
              <SC.Tygraphy variant="body2">
                Admin of Palo’s students place
              </SC.Tygraphy>
            </SC.InnerContent>
            <SC.Boxes>
              <SC.Read>
                <CloseIcon />
              </SC.Read>
            </SC.Boxes>
          </SC.SidebarCard>
          <SC.Boxx>
            <Typography variant=" caption">
              Option one with more text that fill one
            </Typography>
          </SC.Boxx>

          <SC.Boxx>
            <Typography variant=" caption">Option 2</Typography>
          </SC.Boxx>

          <SC.Boxies>
            <Typography variant="secondary.main.dark">3:16 pm</Typography>
          </SC.Boxies>

          <SC.Boxieses>
            <Typography variant="body2">
              Option 1 with more text that fills one line
            </Typography>
          </SC.Boxieses>

          <SC.Bxxx>
            <SC.Tygraphy variant="body2">
              ...send an order screenshot till june 24
              {" "}
              <SC.Btn>Send</SC.Btn>
            </SC.Tygraphy>
          </SC.Bxxx>
        </SC.MainCard>
      </Popover>
    </div>
  );
}
