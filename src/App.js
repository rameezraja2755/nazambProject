import React from "react";
import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
// import { AuthProvider } from "./new_providerr/AuthProvider/index";

import Theme from "./Theme/Index";
import AppRoutes from "./Routes/Router";
import AuthProvider from "./new_providerr/AuthProvider";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <AuthProvider>
        <AppRoutes />

      </AuthProvider>

    </ThemeProvider>
  );
}

export default App;
