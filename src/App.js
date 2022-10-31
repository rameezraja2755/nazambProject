import "./App.css";
import Input from './component/Atoms/input/Input'
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import { Typography } from "@mui/material";
import Button from  './component/Atoms/button/Button'
import Login from './component/Organisms/logIn/Login'
import Sidebar from './component/Organisms/sidebar/Sidebar'
import Card from "./component/Organisms/card/Card"
// import Popup from "./component/Atoms/popup/Popup"


function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
          {/* < Input/>
          <Button/> */}
          {/* <Login /> */}
          <Sidebar />
          {/* <Card /> */}

      </ThemeProvider>
    

      </>
  );
}

export default App;
