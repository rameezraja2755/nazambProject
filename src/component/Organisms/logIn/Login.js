import React, { useState, useContext } from "react";
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
 
} from "./Login.styled.js";
// import {userDetailContext} from "../Context/GlobalVar";
import { useNavigate } from "react-router-dom";
// import {signIn} from "../../../auth/auth";

import { useUserContext } from "../../../Context/userContext";


const signUpSchema = Yup.object({
  email: Yup.string().email().required("please enter your email"),
  password: Yup.string().min(2).max(25).required("password is required "),
});
const initialValues = {
  email: "",
  password: "",
};
const Login = () => {

  const { signInUser, forgotPassword } = useUserContext();


// const AuthContext = useContext(userDetailContext);

const [error, setError]=useState("");
const navigate =useNavigate();
  // const [emailstate,setEmailState]= useState("");
  // const [passwordstate, setPasswordState] =useState("");
  
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values, actions) => {
        console.log(errors, values, "submit",initialValues);
      },
    });
  console.log(values, "values", errors);


// const firebaseHandle =async(e)=>{
//   console.log(e);
//   e.preventDefault();
//   setError("");
// try {
// await signIn(values.email, values.password);
// console.log("firebase doneeeeeeeee at login")
// navigate("/chat")
// }catch(err){
//   setError(err.message);
//   console.log("errrrr at login firebase",error);
// }
//};

return (
    <Formdiv>
      <form onSubmit={()=>{
        handleSubmit();
if (values.email && values.password) 
{signInUser(values.email, values.password);
  navigate("/chat")
}
      }}>
        <Input
          type="email"
          name="email"
          id="email"
          autoComplete="off"
          placeholder="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <PasswordInput
          name="password"
          type="password"
          placeholder="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      
          <Typography>Forgot your password?</Typography>
          <Typography>Forgot your password?</Typography>
       
          <Button />
      
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