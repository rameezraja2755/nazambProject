import * as Yup from "yup";

export const signUpSchema = Yup.object({
  name: Yup.string().min(2).max(25).required("please enter your name"),
  email: Yup.string().email().required("please enter your email"),
  password: Yup.string().min(6).required("please enter your password"),
  confirmPassword: Yup.string().required().oneOf([Yup.ref("password"), null, "password must b match"]),

});
