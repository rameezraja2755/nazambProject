import React from "react";

// import {userDetailContext} from "../Context/GlobalVar";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "../component/Pages/Home/Home";
import Login from "../component/Pages/Login/Login";
import MyFlat from "../component/Pages/MyFlat/MyFlat";
import Protected from "../Protected";
import Signup from "../component/Pages/Signup/Signup";
// import Chat from "../component/Organisms/SideBarChat/Chat";
import { useUserContext } from "../Context/UserContext";
import ChatBoard from "../component/Pages/Chat/ChatBoard";

function Router() {
  // console.log('userDetail', AuthContext, userDetailContext)
  const { user } = useUserContext();
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/chat" element={<ChatBoard />} />
        <Route path="/Signup" element={<Signup />} />
        <Route
          path="/myFlat"
          element={(
            <Protected user={user}>
              <MyFlat />
            </Protected>
          )}
        />
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
