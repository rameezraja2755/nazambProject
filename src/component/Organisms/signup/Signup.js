import React from "react";
import Input from "../../Atoms/input/Input";
import PasswordInput from "../../Atoms/passwordInput/PasswordInput";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Formdiv } from "./Signup.styled";
import Button from "../../Atoms/button/Button";

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

const Signup = () => {
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
          type='FirstName'
          name='FirstName'
          id='FirstName'
          autoComplete='off'
          placeholder='FirstName'
          value={values.FirstName}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.FirstName && errors.FirstName}
        />
        <Input
          type='LastName'
          name='LastName'
          id='LastName'
          autoComplete='off'
          placeholder='LastName'
          value={values.LastName}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.LastName && errors.LastName}
        />
        <Input
          type=''
          name='email'
          id='email'
          autoComplete='off'
          placeholder='email'
          value={values.Email}
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
        <PasswordInput
          name='ConfirmPassword'
          type='ConfirmPassword'
          placeholder='ConfirmPassword'
          value={values.ConfirmPassword}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.ConfirmPassword && errors.ConfirmPassword}
        />
        <Button />
      </form>
    </Formdiv>
  );
};

export default Signup;
