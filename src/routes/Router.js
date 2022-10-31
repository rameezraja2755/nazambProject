import React, { useContext } from "react";

//import ReactDOM from "react-dom/client";

import {userDetailContext} from "../GlobalVar";
import Home from "../component/Pages/Home/Home";
//import Chat from "./pages/Chat/chat";
import Login from "../component/Pages/Login/Login"
import MyFlat from "../component/Pages/MyFlat/MyFlat";
import Protected from "../Protected";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const Router=()=> {
  const userDetail = useContext(userDetailContext);
  console.log('userDetail', userDetail, userDetailContext)
   //const LoggedIn = React.useContext(LoggedIn);
  //const updateLoggedIn = useContext(updateLoggedIn);
  return (
    <BrowserRouter>
   
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/myFlat" element={<Protected isLoggedIn={userDetail.isLoggedIn}>
              <MyFlat />
              </Protected>}/>
          
        </Routes>

      
    </BrowserRouter>
  );
}
export default Router;