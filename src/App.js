import "./App.css";
import Input from './component/Atoms/input/Input'
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import { Typography } from "@mui/material";
import Button from  './component/Atoms/button/Button'
import Login from './component/Organisms/logIn/Login'

// import Sidebar from './component/Organisms/Sidebar's

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Typography
        variant="body1" color="secondary">hello world</Typography>
          < Input/>
          <Button/>
          <Login />
          {/* <Sidebar /> */}
      </ThemeProvider>
    

      </>
  );
}

export default App;
