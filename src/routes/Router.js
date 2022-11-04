import React from "react";

// import {userDetailContext} from "../Context/GlobalVar";
import Home from "../component/Pages/Home/Home";
import Login from "../component/Organisms/logIn/Login"
import MyFlat from "../component/Pages/MyFlat/MyFlat";
import Protected from "../Protected";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Chat from "../component/Organisms/sidebar/Sidebar";

import { useUserContext } from "../Context/userContext";

const Router=()=> {

  //console.log('userDetail', AuthContext, userDetailContext)
  const { user } = useUserContext();
  return (
    <BrowserRouter>
   
      <Routes>
        <Route path="/" exact element={<Home />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/chat" element={<Chat />}/>
        <Route path="/myFlat" element={<Protected user={user}>
          <MyFlat />
        </Protected>
        }
        />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
