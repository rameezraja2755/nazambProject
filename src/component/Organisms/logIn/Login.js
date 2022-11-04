import React from "react";
import Input from "../../Atoms/input/Input";
import PasswordInput from "../../Atoms/passwordInput/PasswordInput";
import Button from "../../Atoms/button/Button";
import { Typography, Box } from "@mui/material";
import { useFormik } from "formik";
// import { signUpSchema } from "./schemas";
import * as Yup from "yup";
import img from "../../../component/images/google.png";
import {
  MainContainer,
  Formdiv,
  Parentbox,
  BoxImg,
  Imagediv,
  Boxx,
  Btn,
} from "./Login.styled.js";

const signUpSchema = Yup.object({
  email: Yup.string().email().required("please enter your email"),
  password: Yup.string().min(2).max(25).required("password is required "),
});

const initialValues = {
  email: "",
  password: "",
};
const Login = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values, actions) => {
        console.log(errors, values, "submit");
      },
    });
  console.log(values, "values", errors);
  return (
    <Formdiv>
      <form onSubmit={handleSubmit}>
        <Input
          type='email'
          name='email'
          id='email'
          autoComplete='off'
          placeholder='email'
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.email && errors.email}
        />
        <PasswordInput
          name='password'
          type='password'
          placeholder='password'
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
          <Button />
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
};

export default Login;
