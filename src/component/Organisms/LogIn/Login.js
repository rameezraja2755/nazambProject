import React, { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { Typography, Box } from "@mui/material";
import { useFormik } from "formik";
// import { signUpSchema } from "./schemas";
import * as Yup from "yup";

import Alert from "@mui/material/Alert";
import PasswordInput from "../../Atoms/PasswordInput/PasswordInput";
import Input from "../../Atoms/Input/Input";
import img from "../../Images/google.png";
import { useAuth } from "../../../new_providerr/AuthProvider";

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
// import { signInUser, forgotPassword, gSignin} from "../../../new_providerr/AuthProvider/actions";
// import { useUserContext } from "../../../Context/UserContext";

const signUpSchema = Yup.object({
  email: Yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: Yup
    .string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),

});

const initialValues = {
  email: "",
  password: "",
};

function Login() {
  const {
    user, error,
    signInUser,
    // authMessage,
    // forgotPassword,
    gSignin,
  } = useAuth();
  // const {
  //   signInUser, user, error, forgotPassword,
  // } = useUserContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/myFlat");
      // console.log("navigatee", user, error);
    } else if (error) {
      <Alert severity="error">
        Error detected!
      </Alert>;
    }
  }, [user, error]);

  const {
    values, errors, handleBlur, handleChange, handleSubmit, touched,
  } = useFormik({
    initialValues,
    validationSchema: signUpSchema,
    onSubmit: () => {
      signInUser(values.email, values.password);

      // console.log("login page user n amsg ", user, authMessage);
    },
  });

  // console.log("error in login page line 73");

  return (
    <MainContainer>
      <form onSubmit={handleSubmit}>

        <Input
          type="email"
          name="email"
          placeholder="Email"
          value={values.email}
          onChange={handleChange}
          error={touched.email && Boolean(errors.email)}
          helperText={touched.email && errors.email}

        />

        <PasswordInput
          name="password"
          placeholder="password"
          type="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.password && Boolean(errors.password)}
          helperText={touched.password && errors.password}

        />
        <Boxx>
          <Link to="/forgetpassword">
            <Typography>Forgot your password?</Typography>

          </Link>
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
            <BoxImg src={img} />
          </Imagediv>

          <Box onClick={() => gSignin(values.email)}>
            <a>Sign in with Google</a>
          </Box>
        </GoogleBox>
      </form>
    </MainContainer>
  );
}

export default Login;
