import React from "react";
import { Box } from "@mui/system";
// import { Link } from "react-router-dom";
// import logo from "../../Images/mainlogo.png";
import Triangle from "../../Images/colors.png";

function Mainnavbar() {
  return (
    <Box>
      {/* <Box style={{
        display: "flex", alignItems: "center",
         justifyContent: "space-around", padding: "20px", gap: "50%",
      }}
      >
        <img src={logo} alt="logo" />
        <Box style={{ display: "flex", gap: "30px" }}>
          <Link
            style={{
              textDecoration: "none",
              color: "#1D9BD6",
              borderBottom: "5px solid #64C4BC",
            }}
            to="/"
          >
            {" "}
            Home
            {" "}
          </Link>

          <Link
            style={{
              textDecoration: "none",
              color: "#1D9BD6",
            }}
            to="/login"
          >
            {" "}
            SignIn
            {" "}
          </Link>

          <Link
            style={{
              textDecoration: "none",
              color: "#1D9BD6",
            }}
            to="/signup"
          >
            SignUp
          </Link>
        </Box>
      </Box> */}
      <Box>
        <img style={{ width: "100%" }} src={Triangle} alt="" />
      </Box>
      <Box>
        <h3 style={{
          fontSizw: "20px", fontWeight: "400", color: "#1D9BD6", paddingLeft: "6%",
        }}
        >
          On the Jammint platform you will:
        </h3>
        <p style={{ width: "40%", lineHeight: "1.4", paddingLeft: "6%" }}>
          Engage directly with your landlord for any and all needs.
          Receive updates and important information about apartment services.
          Manage your contract, extend your stay, and modify your check-out date.
          Manage your payments and security deposit status.
          Enjoy a secure portal protected from fraud
        </p>
      </Box>
      <Box>
        <p style={{
          display: "flex", justifyContent: "center", color: "#64C4BC", marginTop: "70px",
        }}
        >
          Thanks for using Jammint. We are currently BETA
          testing it so we welcome your feedback to help
          improve its function so that it will better serve you.
        </p>
        <p style={{
          display: "flex", justifyContent: "center", color: "#64C4BC", marginTop: "10px",
        }}
        >
          Enjoy Barcelona while we take care of your accommodation !
        </p>

        <p style={{
          display: "flex", justifyContent: "center", color: "#64C4BC", marginTop: "10px", marginBottom: "50px",
        }}
        >
          Whenever you have a minute, lets have a call and I
          ll
          explain you more about the communication strategy
        </p>
      </Box>
    </Box>

  );
}

export default Mainnavbar;
