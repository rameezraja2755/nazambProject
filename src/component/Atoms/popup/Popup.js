import * as React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import MessageIcon from "@mui/icons-material/Message";
import { Box } from "@mui/system";
import CloseIcon from "@mui/icons-material/Close";
import { CardContent } from "@mui/material";
import {
  SC_button,
  SB_Card,
  InnerContent,
  SidebarCard,
  Read,
  Boxes,
  SD_avatar,
  Typo,
  Boxx,
  Tygraphy,
  Boxies,
  Boxieses,
  Bxxx,
  Btn,
} from "./Popup.styled";
import Avatar from "@mui/material/Avatar";

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
      <SC_button
        aria-describedby={id}
        variant='contained'
        onClick={handleClick}>
        <MessageIcon />
      </SC_button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}>
        <SB_Card>
          <SidebarCard>
            <SD_avatar>
              <Typography>OS</Typography>
            </SD_avatar>
            <InnerContent>
              <Typo variant=''>Oleh Sheptytskyi</Typo>
              <Tygraphy variant='body2'>
                Admin of Palo’s students place
              </Tygraphy>
            </InnerContent>
            <Boxes>
              <Read>
                <CloseIcon />
              </Read>
            </Boxes>
          </SidebarCard>
          <Boxx>
            <Typography variant=' caption'>
              Option one with more text that fill one
            </Typography>
          </Boxx>

          <Boxx>
            <Typography variant=' caption'>Option 2</Typography>
          </Boxx>

          <Boxies>
            <Typography variant='secondary.main.dark'>3:16 pm</Typography>
          </Boxies>

          <Boxieses>
            <Typography variant='body2'>
              Option 1 with more text that fills one line
            </Typography>
          </Boxieses>

          <Bxxx>
            <Tygraphy variant='body2'>
              ...send an order screenshot till june 24 <Btn>Send</Btn>
            </Tygraphy>
          </Bxxx>
        </SB_Card>
      </Popover>
    </div>
  );
}
