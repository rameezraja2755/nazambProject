import React from "react";
import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
// import { AuthProvider } from "./new_providerr/AuthProvider/index";

import Theme from "./Theme/Index";
import AppRoutes from "./Routes/Router";
import AuthProvider from "./new_providerr/AuthProvider";
import NavChatBoard from "./component/Organisms/Card/NavChatboard";

function App() {
  return (

    <ThemeProvider theme={Theme}>
      <AuthProvider>
        <AppRoutes />
        <NavChatBoard />

      </AuthProvider>

    </ThemeProvider>
  );
}

export default App;
