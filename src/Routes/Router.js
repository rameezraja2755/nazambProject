import React from "react";

// import {userDetailContext} from "../Context/GlobalVar";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "../component/Pages/Home/Home";
import MainNavbar from "../component/Organisms/mainNavbar";
import Login from "../component/Pages/Login/Login";
// import MyFlat from "../component/Pages/MyFlat/MyFlat";
import Protected from "../Protected";
import Signup from "../component/Pages/Signup/Signup";
import ForgetPassword from "../component/Organisms/ForgetPassword";
// import Chat from "../component/Organisms/SideBarChat/Chat";
// import { useUserContext } from "../Context/UserContext";
import ChatBoard from "../component/Pages/Chat/ChatBoard";
import { useAuth } from "../new_providerr/AuthProvider/index";

function Router() {
  // console.log('userDetail', AuthContext, userDetailContext)
  const {
    // loggedIn,
    userId, userName,
  } = useAuth();

  console.log("userId, username in router", userId, userName);
  return (

    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          exact
          element={(
            <>
              <MainNavbar />
              <Home />
            </>
          )}
        />
        <Route
          path="/login"
          exact
          element={(
            <>
              <MainNavbar />
              <Login />
            </>
          )}
        />
        {/* <Route path="/chat" element={<ChatBoard />} /> */}
        <Route
          path="/signup"
          element={(
            <>

              <MainNavbar />
              <Signup />

            </>
          )}
        />
        <Route
          path="/forgetpassword"
          element={(
            <>
              <MainNavbar />
              <ForgetPassword />
            </>
          )}
        />

        <Route
          path="/chat"
          element={(
            <Protected userId={userId}>
              <ChatBoard />
            </Protected>
          )}
        />
        <Route
          path="/chat/:chatId"
          element={(
            <Protected userId={userId}>
              <ChatBoard />
            </Protected>
          )}
        />
      </Routes>
    </BrowserRouter>

  );
}
export default Router;
