import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Typography } from "@mui/material";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import Button from "@mui/material/Button";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
// import sx from "@mui/system/sx";
import * as SC from "./NavChatboard.styled";
import Card from "./Card";
import Popup from "../../Atoms/popup/Popup";
import BlueCard from "./BlueCard";
import chk from "../../Images/boy.jpg";

export default function LabTabs() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function createData(Reference, Amount, Status = "", Action = "") {
    return {
      Reference, Amount, Status, Action,
    };
  }
  const rows = [
    createData("Deposit", "3.393$", "Paid", "Cleared "),
    createData("Feb-2022", "2.200$", "Awaiting", "Processed"),
    createData("Mar-2022", "2.200$", "Awaiting", "Processed"),
    createData("Apr-2022", "2.200$", true),
    createData("May-2022", "1.100$", true),
  ];
  // console.log(rows, "rowss");
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
        <SC.TitleBox>
          <SC.Typo variant="body2">Polo’s student place</SC.Typo>
        </SC.TitleBox>
        {/* <SudoContainer variant="body1">July 19, 2021</SudoContainer> */}

        <TabPanel p={0} value="1">
          <Card />

          <Box />
          <Popup />
        </TabPanel>
        <TabPanel value="2">
          <BlueCard />
        </TabPanel>

        <TabPanel value="3">
          <SC.MyRoom>
            <SC.ContractPayment>
              <SC.ContractConditions>
                <Typography variant="h1">Contract conditions</Typography>
                <SC.RoomBox>
                  <SC.IconBox>
                    <Box>
                      <AccountBalanceIcon />
                    </Box>
                    <SC.Room>
                      <Typography variant="body1">Room Nr</Typography>
                    </SC.Room>
                  </SC.IconBox>

                  {/* <SC.Date variant="body2">2</SC.Date> */}
                </SC.RoomBox>
                <hr color="grey" />
                <SC.RoomBox>
                  <SC.IconBox>
                    <Box>
                      <AccountBalanceIcon />
                    </Box>
                    <SC.Room>
                      <Typography variant="body1">Resevation</Typography>
                    </SC.Room>
                  </SC.IconBox>
                </SC.RoomBox>
                <SC.CheckIn>
                  <Typography variant="h3">Check-In:</Typography>
                  <Typography variant="h3">Check-Out:</Typography>
                </SC.CheckIn>
                <SC.Month>
                  <Typography variant="body2">07-Feb-2022</Typography>
                  <Typography variant="body2">04-May-2004</Typography>
                </SC.Month>
                <hr color="grey" />
                <SC.RoomBox>
                  <SC.IconBox>
                    <Box>
                      <AccountBalanceIcon />
                    </Box>
                    <SC.Room>
                      <Typography variant="body1">Invoice datails</Typography>
                    </SC.Room>
                  </SC.IconBox>
                </SC.RoomBox>
                <SC.CheckIn>
                  <Typography variant="h3">Rent :</Typography>
                  <Typography variant="body2">2.000$</Typography>
                </SC.CheckIn>
                <SC.Month>
                  <Typography variant="h3">Deposit :</Typography>
                  <Typography variant="body2">200$</Typography>
                </SC.Month>
                <SC.Month>
                  <Typography variant="h3">Deposit :</Typography>
                  <Typography variant="body2">200$</Typography>
                </SC.Month>
                <hr color="grey" />

                <SC.RoomBox>
                  <SC.IconBox>
                    <Box>
                      <AccountBalanceIcon />
                    </Box>
                    <SC.Room>
                      <Typography variant="body1">Policy</Typography>
                    </SC.Room>
                  </SC.IconBox>
                </SC.RoomBox>
                <SC.CheckIn>
                  <Typography variant="h3">Contract mode :</Typography>
                  <Typography variant="body2">Variable</Typography>
                </SC.CheckIn>
                newValue
                <SC.Month>
                  <Typography variant="h3">Expenses Policy :</Typography>
                  <Typography variant="body2">Fortnightly</Typography>
                </SC.Month>
                <div style={{
                  alignItems: "center",
                  justifyContent: "center",
                }}
                >
                  <Button
                    sx={{
                      background: "linear-gradient(to right bottom, #1D9BD6, #64C4BC)",
                      width: "144px",
                      height: "40px",
                      borderRadius: "8px",
                      margin: "15px 110px",

                    }}
                    variant="contained"
                    type="submit"
                  >
                    {" "}
                    View Contract
                    {" "}
                  </Button>
                </div>
              </SC.ContractConditions>
              <SC.PaymentsBox>
                <Typography variant="h1">Payments</Typography>
                <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 650, Height: 50 }} aria-label="simple table">
                    <TableHead>
                      <TableRow style={{ minHeight: "50px" }}>
                        <TableCell style={{ color: "#1D9BD6", backgroundColor: "white", height: "5px" }} align="center">Reference</TableCell>
                        <TableCell style={{ color: "#1D9BD6", backgroundColor: "white", height: "5px" }} align="center">Amount</TableCell>
                        <TableCell style={{ color: "#1D9BD6", backgroundColor: "white", height: "5px" }} align="center">Status</TableCell>
                        <TableCell style={{ color: "#1D9BD6", backgroundColor: "white", height: "5px" }} align="center">Action</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map((row) => (
                        <TableRow
                          sx={row.Status === true && { color: "black" }}
                          key={row.name}
                        >

                          <TableCell sx={row.Status === true && { color: "grey" }} align="center" style={{ height: "5px" }}>{row.Reference}</TableCell>
                          <TableCell sx={row.Status === true && { color: "grey" }} align="center" style={{ height: "5px" }}>{row.Amount}</TableCell>
                          <TableCell sx={{ color: `${row.Status === "Paid" ? "#5AC3B8" : row.Status === "Awaiting" && "#FF912C"}` }} align="center" style={{ height: "10px" }}>{row.Status}</TableCell>
                          <TableCell
                            // variant="processed"
                            sx={{
                              color: `${row.Status === "Paid" ? "#5AC3B8" : row.Status === "Awaiting" && "#FF912C"}`,
                              background: `${row.Status === "Paid" ? "rgba(100, 196, 188, 0.19)" : row.Status === "Awaiting" && "pink"}`,
                              width: `${row.Status === "Paid" ? "81px" : row.Status === "Awaiting" && "81px"}`,
                              border: `${row.Status === "Paid" ? "5px solid white" : row.Status === "Awaiting" && "5px solid white"}`,
                              borderRadius: `${row.Status === "paid" ? "15px" : row.Status === "Awaiting" && "15px"}`,
                            }}
                            align="center"
                          >

                            {row.Action}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>

              </SC.PaymentsBox>

            </SC.ContractPayment>

            <SC.UsefulInfo>
              <SC.InfoParent>
                <Box>
                  <Typography variant="h1">UsefulInfo</Typography>
                </Box>
                {/* <SC.Popup>
                  <Popup />
                </SC.Popup> */}
              </SC.InfoParent>
              <SC.Accordions>
                <Accordion sx={{ position: "relative" }}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon style={{ color: "#64C4BC" }} />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography variant="body1" sx={{ ml: "40px" }}>Check-In/check-out procedure</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <SC.Accodiv>
                      <Box>
                        <SC.CheckedIn>

                          <SC.Img>
                            <img src={chk} alt="img" />
                          </SC.Img>
                          <SC.Text>
                            <Typography>The check-in time is from 10 AM to 8 PM</Typography>
                            <Typography variant="h3">Check-in procedure:</Typography>
                            <Typography variant="body2">
                              Just give me a call 20 mins
                              before getting to the apartment

                            </Typography>
                          </SC.Text>

                        </SC.CheckedIn>
                        <SC.CheckedIn>
                          <SC.Img>
                            <img src={chk} alt="img" />
                          </SC.Img>
                          <SC.Text>
                            <Typography>The check-out time is before 10 AM </Typography>
                            <Typography variant="h3">Check-out procedure:</Typography>
                            <Typography variant="body2">
                              Just leave your keys on your rooms desk

                            </Typography>
                          </SC.Text>

                        </SC.CheckedIn>
                      </Box>

                    </SC.Accodiv>
                  </AccordionDetails>

                  <SC.Popup>
                    <Popup />
                  </SC.Popup>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon style={{ color: "#64C4BC" }} />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography variant="body1" sx={{ ml: "40px" }}>House rules</Typography>
                  </AccordionSummary>
                  <AccordionDetails>

                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                      malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon style={{ color: "#64C4BC" }} />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                  >
                    <Typography variant="body1" sx={{ ml: "40px" }}>Wi-fi</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                      malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon style={{ color: "#64C4BC" }} />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                  >
                    <Typography variant="body1" sx={{ ml: "40px" }}>Bank Info</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                      malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                  </AccordionDetails>
                </Accordion>

              </SC.Accordions>
            </SC.UsefulInfo>

          </SC.MyRoom>
        </TabPanel>
      </TabContext>
    </Box>
  );
}
