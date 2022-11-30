import React from "react";

// import {userDetailContext} from "../Context/GlobalVar";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "../component/Pages/Home/Home";
import HomeMainNavbar from "../component/Organisms/Navlog";
// import Login from "../component/Pages/Login/Login";
// import MyFlat from "../component/Pages/MyFlat/MyFlat";
import Protected from "../Protected";
import Signup from "../component/Pages/Signup/Signup";
import ForgetPassword from "../component/Organisms/ForgetPassword";
// import Chat from "../component/Organisms/SideBarChat/Chat";
import { useUserContext } from "../Context/UserContext";
import ChatBoard from "../component/Pages/Chat/ChatBoard";

function Router() {
  // console.log('userDetail', AuthContext, userDetailContext)
  const { user } = useUserContext();
  return (
    <BrowserRouter>

      <Routes>
        <Route
          path="/"
          exact
          element={(
            <>
              <HomeMainNavbar />
              <Home />
            </>
          )}
        />
        <Route
          path="/login"
          exact
          element={(
            <>
              {/* <HomeMainNavbar /> */}
              <ChatBoard />
              {/* <Login /> */}
            </>
          )}
        />
        {/* <Route path="/chat" element={<ChatBoard />} /> */}
        <Route
          path="/signup"
          element={(
            <>
              <HomeMainNavbar />
              {" "}
              <Signup />
              {" "}

            </>
          )}
        />
        <Route
          path="/forgetpassword"
          element={(
            <>
              <HomeMainNavbar />
              <ForgetPassword />
            </>
          )}
        />

        <Route
          path="/chat"
          element={(
            <Protected user={user}>
              <ChatBoard />
            </Protected>
          )}
        />
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
