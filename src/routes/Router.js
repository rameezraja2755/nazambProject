import React, {useContext} from "react";

import ReactDOM from "react-dom/client";
import { BrowserRouter, Router, Switch, Route} from "react-router-dom";
import {userDetails} from "../GlobalVar";
import Home from "./pages/home/Home";
//import Chat from "./pages/Chat/chat";
import Login from "../component/Pages/Login/Login"
import MyFlat from "../component/Pages/MyFlat/MyFlat";
import Protected from "../Protected";


const Routerr=()=> {
  const userDetail = useContext(userDetails);
   //const LoggedIn = React.useContext(LoggedIn);
  //const updateLoggedIn = useContext(updateLoggedIn);
  return (
    <BrowserRouter>
    <Router>
    <Switch>
            <Route path='/' element={<Home />} />
            <Route path ='/login' element={<Login />} />
            
            <Route path='/myflat' element={
                <Protected isLoggedIn={userDetail.isLoggedIn}>
                <MyFlat />
                </Protected>}
            />
            
    </Switch>
    </Router>
    </BrowserRouter>
  );
}
export default Routerr;