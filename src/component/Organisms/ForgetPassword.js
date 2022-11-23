import React from "react";
import { useFormik } from "formik";
import { sendPasswordResetEmail } from "firebase/auth";
import * as Yup from "yup";
import { Typography } from "@mui/material";
import { auth } from "../../FirebaseConfig";
import Input from "../Atoms/Input/Input";
import { MainContainer, Btn } from "./Forgetpassword.styled";

const forgetPasswordSchema = Yup.object({
  email: Yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
});

const initialValues = {
  email: "",
};

function ForgetPassword() {
  const {
    values, errors, handleChange, handleSubmit, touched,
  } = useFormik({
    initialValues,
    validationSchema: forgetPasswordSchema,
    onSubmit: async () => {
      try {
        await sendPasswordResetEmail(auth, values.email);
      } catch (error) {
        console.log(error, "error");
      }
    },
  });
  return (
    <MainContainer>
      <form onSubmit={handleSubmit}>
        <Typography>Forget Pasword</Typography>
        <Input
          type="email"
          name="email"
          placeholder="Email"
          value={values.email}
          onChange={handleChange}
          error={touched.email && Boolean(errors.email)}
          helperText={touched.email && errors.email}
        />
        <Btn type="submit">Send Email</Btn>
      </form>
    </MainContainer>
  );
}

export default ForgetPassword;
