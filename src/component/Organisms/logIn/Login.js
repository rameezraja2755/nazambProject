import React from "react";
import Input from "../../Atoms/input/Input";
import PasswordInput from "../../Atoms/passwordInput/PasswordInput";
import Button from "../../Atoms/button/Button";
import { Typography, Box } from "@mui/material";
import {
  MainContainer,
  Formdiv,
  Parentbox,
  BoxImg,
  Imagediv,
} from "./Login.styled.js";
import img from "../../../component/images/google.png";

const Login = () => {
  return (
    <form style={{display:"flex", display:" flex",
    height: "100vh"}}>
      <Formdiv>
        <Input />
        <PasswordInput />
        <Typography>
          Forgot your password? <br />
          Resend activation email.
        </Typography>
        <Button />
        <MainContainer>or</MainContainer>
        <Parentbox>
          <Imagediv>
            <BoxImg src={img} />
          </Imagediv>

          <Box>
            <Typography>Sign in with Google</Typography>
          </Box>
        </Parentbox>
      </Formdiv>
    </form>
  );
};

export default Login;
