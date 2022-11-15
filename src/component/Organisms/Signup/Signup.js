/* eslint-disable no-undef */
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button } from "@mui/material";
import Alert from "@mui/material/Alert";
import Input from "../../Atoms/Input/Input";
import PasswordInput from "../../Atoms/PasswordInput/PasswordInput";
import { Container, AlertBox } from "./Signup.styled";
import { useUserContext } from "../../../Context/UserContext";

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
  const { registerUser, error } = useUserContext();
  const {
    values, errors, handleChange, handleSubmit, touched,
  } = useFormik({
    initialValues,
    validationSchema: signUpSchema,
    onSubmit: () => {
      registerUser(values.email, values.password, values.FirstName);
    },
  });
  // console.log(values, "values", errors);

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Input
          type="FirstName"
          name="FirstName"
          id="FirstName"
          placeholder="FirstName"
          value={values.FirstName}
          onChange={handleChange}
          error={touched.FirstName && Boolean(errors.FirstName)}
          helperText={touched.FirstName && errors.FirstName}

        />
        <Input
          type="LastName"
          name="LastName"
          id="LastName"
          placeholder="LastName"
          value={values.LastName}
          onChange={handleChange}
          error={touched.LastName && Boolean(errors.LastName)}
          helperText={touched.LastName && errors.LastName}
        />
        <Input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          value={values.email}
          onChange={handleChange}
          error={touched.email && Boolean(errors.email)}
          helperText={touched.email && errors.email}
        />
        <PasswordInput
          name="password"
          placeholder="password"
          value={values.password}
          onChange={handleChange}
          error={touched.password && Boolean(errors.password)}
          helperText={touched.password && errors.password}
        />

        <PasswordInput
          name="ConfirmPassword"
          type="ConfirmPassword"
          placeholder="ConfirmPassword"
          value={values.ConfirmPassword}
          onChange={handleChange}
          error={touched.ConfirmPassword && Boolean(errors.ConfirmPassword)}
          helperText={touched.ConfirmPassword && errors.ConfirmPassword}

        />
        <Button
          sx={{
            background: "linear-gradient(to right bottom, #1D9BD6, #64C4BC)",
            width: "144px",
            height: "40px",
            margin: "10px",
          }}
          variant="contained"
          type="submit"
        >
          {" "}
          Sign up
          {" "}
        </Button>
        <br />
        <br />
        <AlertBox>
          {error ? <Alert variant="filled" severity="error">User Already registered!</Alert> : ""}
        </AlertBox>

      </form>
    </Container>
  );
}

export default Signup;
