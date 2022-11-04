import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import Router from "./routes/Router";
// import UserDetailProvider from "./Context/GlobalVar";
import {useUserContext} from "./Context/userContext"

function App() {
   const {loading, error, user}= useUserContext();
  return (
    <>
      <ThemeProvider theme={theme}>
      
        {/* <UserDetailProvider> */}
        <Router />
        
     }
        {/* </UserDetailProvider> */}
        
      </ThemeProvider>
    

      </>
  );
}

export default App;
