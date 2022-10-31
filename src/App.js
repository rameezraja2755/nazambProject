import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import Router from "./routes/Router";
import UserDetailProvider from "./GlobalVar";
import Navbar from "./component/Organisms/Navbar";
import Sidebar from './component/Organisms/sidebar/Sidebar'
import MainNavbar from "./component/Organisms/MainNavbar";
import Myroom from "./component/Organisms/myRoom/Myroom";
import { Typography } from "@mui/material";
import Button from  './component/Atoms/button/Button'
import Login from './component/Organisms/logIn/Login'
import Card from "./component/Organisms/card/Card"
// import Popup from "./component/Atoms/popup/Popup"

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <UserDetailProvider>
        {/* <Router />s */}
        {/* <Login /> */}
{/* <Myroom /> */}
        <div style={{display:"flex",alignItems:"center"}}>
     <Navbar /> 
     <MainNavbar />
        </div>
        </UserDetailProvider>
      </ThemeProvider>
    

      </>
  );
}

export default App;
