/* eslint-disable import/named */
import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Typography } from "@mui/material";

// eslint-disable-next-line import/no-cycle

// import { Container } from "@mui/system";
import {
  TitleBox, Typo,
  ScCard, SdCard, SbCard, SccCard, SddCard, SbbCard, Boxes, Date, SudoContainer,
} from "./NavChatboard.styled";

export default function LabTabs() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{
      width: "100%",
    }}
    >
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Board" value="1" />
            <Tab label="Flat mates" value="2" />
            <Tab label="Myroom" value="3" />
          </TabList>
        </Box>
        <TitleBox>
          <Typo variant="body2">Polo’s student place</Typo>
        </TitleBox>
        {/* <Container> */}
        <SudoContainer>July 19, 2021</SudoContainer>
        {/* </Container> */}
        <TabPanel value="1">
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

        </TabPanel>
        <TabPanel value="2">
          <SccCard>
            <Typography variant="body3">
              The process is usually completed by a group of people with different
              skills and training—e.g. industrial designers, field experts
              (prospective users), engineers(for engineering design aspects),
              depending upon the nature and type of the product involved.
            </Typography>

          </SccCard>
          <SbbCard>
            <Typography variant="body3">
              Option 1 with more text that fills one line
            </Typography>
          </SbbCard>

          <SddCard>

            <Typography variant="body33">
              Option 2
            </Typography>
          </SddCard>
          <Boxes>
            <Typography variant="secondary">Alan lee</Typography>
            <Typography variant="secondary:main">3:16pm</Typography>
          </Boxes>
          <Date>
            <Typography>July 20, 2021</Typography>
          </Date>
        </TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
      </TabContext>
    </Box>
  );
}
