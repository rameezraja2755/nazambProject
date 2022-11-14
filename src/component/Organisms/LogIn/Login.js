import React, { useEffect } from "react";
import Button from "@mui/material/Button";
import { Typography, Box } from "@mui/material";
import { useFormik } from "formik";
// import { signUpSchema } from "./schemas";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import Alert from "@mui/material/Alert";
import PasswordInput from "../../Atoms/PasswordInput/PasswordInput";
import Input from "../../Atoms/Input/Input";
import img from "../../Images/google.png";

import {
  MainContainer,
  Dash,
  GoogleBox,
  BoxImg,
  Imagediv,
  Boxx,
  Btn,
  // Input,
} from "./Login.styled";
import { useUserContext } from "../../../Context/UserContext";

const signUpSchema = Yup.object({
  email: Yup.string().email().required("please enter your email"),
  password: Yup.string().min(2).max(25).required("password is required "),
});

const initialValues = {
  email: "",
  password: "",
};

function Login() {
  const {
    signInUser, user, error, gSignin, forgotPassword,
  } = useUserContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/");
      console.log("navigatee", user, error);
    } else if (error) {
      <Alert severity="error">This is an error alert — check it out!</Alert>;
    }
  }, [user, error]);

  const {
    values, errors, handleBlur, handleChange, handleSubmit,
  } = useFormik({
    initialValues,
    validationSchema: signUpSchema,
    onSubmit: () => {
      signInUser(values.email, values.password);

      console.log("login page user ", user);
    },
  });

  return (
    <MainContainer>
      <form onSubmit={handleSubmit}>
        <Input
          type="email"
          name="email"
          placeholder="Email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.email && errors.email}
        />

        <PasswordInput
          name="password"
          placeholder="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.password && errors.password}
          //  <InputAdornment position="end">
          //       <DoneIcon />
          //     </InputAdornment>
        />
        <Boxx onClick={forgotPassword(values.email)}>
          <Typography>Forgot your password?</Typography>
          {/* <Typography>Resend activation email.</Typography> */}
        </Boxx>
        <Btn>
          <Button
            sx={{
              background: "linear-gradient(to right bottom, #1D9BD6, #64C4BC)",
              width: "144px",
              height: "40px",
            }}
            variant="contained"
            type="submit"
          >
            {" "}
            Sign in
            {" "}
          </Button>
        </Btn>

        <Box>
          <Dash>or</Dash>
        </Box>
        <GoogleBox>
          <Imagediv>
            <BoxImg src={img} onClick={gSignin} />
          </Imagediv>

          <Box>
            <a>Sign in with Google</a>
          </Box>
        </GoogleBox>
      </form>
    </MainContainer>
  );
}

export default Login;
