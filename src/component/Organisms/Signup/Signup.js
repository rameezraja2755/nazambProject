import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button } from "@mui/material";
import Input from "../../Atoms/Input/Input";
import PasswordInput from "../../Atoms/PasswordInput/PasswordInput";
import { Container } from "./Signup.styled";

const signUpSchema = Yup.object({
  FirstName: Yup.string()
    .min(2)
    .max(25)
    .required("please enter your first name "),
  LastName: Yup.string()
    .min(2)
    .max(25)
    .required("please enter your last name "),
  email: Yup.string().email().required("please enter your email"),
  password: Yup.string().min(2).max(25).required("password is required "),
  ConfirmPassword: Yup.string()
    .required()
    .oneOf([Yup.ref("password"), null, "password must b match"]),
});

const initialValues = {
  FirstName: "",
  LastName: "",
  email: "",
  password: "",
  ConfirmPassword: "",
};

function Signup() {
  const {
    values, errors, handleBlur, handleChange, handleSubmit,
  } = useFormik({
    initialValues,
    validationSchema: signUpSchema,
    onSubmit: () => {
      console.log(errors, values, "submit");
    },
  });
  console.log(values, "values", errors);

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Input
          type="FirstName"
          name="FirstName"
          id="FirstName"
          autoComplete="off"
          placeholder="FirstName"
          value={values.FirstName}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.FirstName && errors.FirstName}
        />
        <Input
          type="LastName"
          name="LastName"
          id="LastName"
          autoComplete="off"
          placeholder="LastName"
          value={values.LastName}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.LastName && errors.LastName}
        />
        <Input
          type=""
          name="email"
          id="email"
          autoComplete="off"
          placeholder="Email"
          value={values.Email}
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
        />

        <PasswordInput
          name="ConfirmPassword"
          type="ConfirmPassword"
          placeholder="ConfirmPassword"
          value={values.ConfirmPassword}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.ConfirmPassword && errors.ConfirmPassword}
        />
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
      </form>
    </Container>
  );
}

export default Signup;
