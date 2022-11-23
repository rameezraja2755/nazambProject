/* eslint-disable import/named */
import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import BlueCard from "./BlueCard";
import Popup from "../../Atoms/popup/Popup";
import Card from "./Card";

// eslint-disable-next-line import/no-cycle

// import { Container } from "@mui/system";
import {
  TitleBox, Typo, SudoContainer,
} from "./NavChatboard.styled";

export default function LabTabs() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{
      width: "100%", justifyContent: "center", border: "5px solid red", alignItems: "center",
    }}
    >
      <TabContext sx={{ display: "flex", padding: "0px" }} value={value}>
        <Box display="flex" justifyContent="center" sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Board" value="1" />
            <Tab label="Flat mates" value="2" />
            <Tab label="Myroom" value="3" />
          </TabList>
        </Box>
        <TitleBox>
          <Typo variant="body2">Polo’s student place</Typo>
        </TitleBox>
        {/* <SudoContainer variant="body1">July 19, 2021</SudoContainer> */}

        <TabPanel p={0} value="1">
          <Card />
          <SudoContainer variant="body1">New</SudoContainer>
          <Box />
          <Popup />
        </TabPanel>
        <TabPanel value="2">
          <BlueCard />
        </TabPanel>

        <TabPanel value="3">Item Three</TabPanel>
      </TabContext>
    </Box>
  );
}
