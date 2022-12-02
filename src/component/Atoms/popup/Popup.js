/* eslint-disable react/jsx-pascal-case */
/* eslint-disable linebreak-style */
import * as React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import MessageIcon from "@mui/icons-material/Message";
import CloseIcon from "@mui/icons-material/Close";
// import { margin } from "@mui/system";
import * as SC from "./Popup.styled";

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

      <SC.PopupButton>
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
            vertical: "top",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "bottom",
            horizontal: "center",
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
                <SC.Read onClick={() => setAnchorEl(false)}>
                  <CloseIcon />
                </SC.Read>
              </SC.Boxes>
            </SC.SidebarCard>
            <SC.Boxx>
              <Typography variant="caption">
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
                Option 1 with  text that fills one line
              </Typography>
            </SC.Boxieses>

            <SC.Bxxx>
              <SC.Tygraphy variant="body2">
                <input
                  type="text"
                  name="name"
                  placeholder="  ...send an order screen  june 24"
                  style={{
                    width: "243px", height: "20px", border: "none", margin: "10px",

                  }}

                />
                {" "}
                <SC.Btn> Send </SC.Btn>
              </SC.Tygraphy>
            </SC.Bxxx>
          </SC.MainCard>
        </Popover>
      </SC.PopupButton>
    </div>
  );
}
