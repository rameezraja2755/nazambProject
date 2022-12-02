import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Avatar from "@mui/material/Avatar";
import Imb from "../../Images/boy.jpg";
import Imc from "../../Images/g1.png";
import * as SC from "./BlueCard.styled";

export default function BasicCard() {
  const [isOpen, setIsOpen] = React.useState(true);
  return (
    <SC.FullFlatmates>
      <SC.Flatmates>
        <SC.User>
          <SC.SccCard>
            <Typography variant="body3">
              The process is usually completed by a group of people with different
              skills and training—e.g. industrial designers, field experts
              (prospective users), engineers(for engineering design aspects),
              depending upon the nature and type of the product involved.
            </Typography>

          </SC.SccCard>
          <SC.SbbCard>
            <Typography variant="body3">
              Option 1 with more text that fills one line
            </Typography>
          </SC.SbbCard>

          <SC.SddCard>

            <Typography variant="body33">
              Option 2
            </Typography>
          </SC.SddCard>
          <SC.Boxes>
            <Typography variant="secondary">Alan lee</Typography>
            <Typography variant="secondary:main">3:16pm</Typography>
          </SC.Boxes>

          <SC.Date variant="secondary">July 20, 2021</SC.Date>

          <SC.SudoContainer variant="body1">New</SC.SudoContainer>

          <SC.SbbCard>
            <Typography variant="body3">
              Option 1 with more text that fills one line
              {" "}
            </Typography>
          </SC.SbbCard>
          <SC.SddCard>
            <Typography variant="body33">
              Option 2
            </Typography>
          </SC.SddCard>
          <SC.BlueBoxes>
            <Typography variant="secondary">Angelina Patterson</Typography>
            <Typography variant="secondary:main">3:14pm</Typography>
          </SC.BlueBoxes>
        </SC.User>

        <SC.Clt>
          <SC.SdiCard>
            <Typography variant="body2">
              Option 1 with more text that fills one line
            </Typography>
          </SC.SdiCard>
          <SC.Boxes>
            <Typography variant="secondary">Me</Typography>
            <Typography variant="secondary:main">3:17pm</Typography>
          </SC.Boxes>

          <SC.SbiCard>
            <Typography variant="body2">
              There are various product design processes and many focus on different aspects.
            </Typography>
          </SC.SbiCard>
          <SC.InputCard>
            <input type="text" name="name" placeholder=" Don’t forget to send an order screenshot till June 24" style={{ width: "480px", height: "44px", border: "none" }} />

            <SC.IconBox>
              <SC.Icon>
                <AddIcon sx={{ color: "#3185FC", gap: "20px" }} />
                <SentimentSatisfiedAltIcon />
              </SC.Icon>
              <Box>
                <SC.Btn>Send</SC.Btn>

              </Box>
            </SC.IconBox>

          </SC.InputCard>
        </SC.Clt>
      </SC.Flatmates>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        {
          isOpen
        && (
          <SC.Rightbar>
            <SC.Sidebar>
              <SC.Flatematebox>
                <Typography variant="h3">FLATMATES</Typography>
              </SC.Flatematebox>
              <SC.SidebarCard>
                <SC.Avter>
                  <Avatar src={Imb} />
                </SC.Avter>
                <SC.InnerContent>
                  <Typography sx={{ fontSize: 18, color: "black", fontWeight: "bold" }}>
                    Alan Lee
                  </Typography>
                  <Typography sx={{ fontSize: 13 }} color="text.secondary">
                    Sao Paulo, Brazil
                  </Typography>

                </SC.InnerContent>

              </SC.SidebarCard>
              <SC.SidebarCard>
                <SC.Avter>
                  <Avatar src={Imc} />
                </SC.Avter>
                <SC.InnerContent>
                  <Typography sx={{ fontSize: 18, color: "black", fontWeight: "bold" }}>
                    Alan Lee
                  </Typography>
                  <Typography sx={{ fontSize: 13 }} color="text.secondary">
                    Sao Paulo, Brazil
                  </Typography>

                </SC.InnerContent>

              </SC.SidebarCard>
            </SC.Sidebar>

          </SC.Rightbar>
        )
        }

        <SC.IconBoxx onClick={() => setIsOpen(!isOpen)}>
          {
            isOpen
              ? <KeyboardArrowRightIcon style={{ color: "#64C4BC" }} /> : "<"
          }
        </SC.IconBoxx>
      </div>
    </SC.FullFlatmates>
  );
}
