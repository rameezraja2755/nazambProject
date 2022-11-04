import React from "react";
import Button from "@mui/material/Button";
import { Typography, Box } from "@mui/material";
import { useFormik } from "formik";
// import { signUpSchema } from "./schemas";
import * as Yup from "yup";
import PasswordInput from "../../Atoms/passwordInput/PasswordInput";
import Input from "../../Atoms/input/Input";
import img from "../../images/google.png";
import {
  MainContainer,
  Formdiv,
  Parentbox,
  BoxImg,
  Imagediv,
  Boxx,
  Btn,
} from "./Login.styled.js";
import { useUserContext } from "../../../Context/userContext";

const signUpSchema = Yup.object({
  email: Yup.string().email().required("please enter your email"),
  password: Yup.string().min(2).max(25).required("password is required "),
});

const initialValues = {
  email: "",
  password: "",
};
function Login() {
  const { signInUser } = useUserContext();

  const {
    values, errors, handleBlur, handleChange, handleSubmit,
  } = useFormik({
    initialValues,
    validationSchema: signUpSchema,
    onSubmit: (values) => {
      console.log("dayam", values);
      signInUser(values.email, values.password);
    },
  });

  return (
    <Formdiv>
      <form onSubmit={handleSubmit}>
        <Input
          type="email"
          name="email"
          id="email"
          autoComplete="off"
          placeholder="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.email && errors.email}
        />
        <PasswordInput
          name="password"
          type="password"
          placeholder="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.password && errors.password}
        />
        <Boxx>
          <Typography>Forgot your password?</Typography>
          <Typography>Resend activation email.</Typography>
        </Boxx>
        <Btn>
          <Button type="submit"> Login </Button>
        </Btn>

        <Box>
          <MainContainer>or</MainContainer>
        </Box>
        <Parentbox>
          <Imagediv>
            <BoxImg src={img} />
          </Imagediv>

          <Box>
            <Typography>Sign in with Google</Typography>
          </Box>
        </Parentbox>
      </form>
    </Formdiv>
  );
}

export default Login;
