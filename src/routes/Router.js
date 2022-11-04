import React, { useContext } from "react";

//import ReactDOM from "react-dom/client";

import { userDetailContext } from "../GlobalVar";
import Home from "../component/Pages/Home/Home";
//import Chat from "./pages/Chat/chat";
import Login from "../component/Organisms/logIn/Login";
import MyFlat from "../component/Pages/MyFlat/MyFlat";
import Protected from "../Protected";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ChatBoard from "../component/Pages/ChatBoard/ChatBoard";
import Signup from "../component/Organisms/signup/Signup";
import Popup from "../component/Atoms/popup/Popup";

const Router = () => {
  const userDetail = useContext(userDetailContext);
  console.log("userDetail", userDetail, userDetailContext);
  //const LoggedIn = React.useContext(LoggedIn);
  //const updateLoggedIn = useContext(updateLoggedIn);
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/ChatBoard' element={<ChatBoard />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/Popup' element={<Popup />} />
        <Route
          path='/myFlat'
          element={
            <Protected isLoggedIn={userDetail.isLoggedIn}>
              <MyFlat />
            </Protected>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
