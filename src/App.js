import React from "react";
import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import Theme from "./Theme/Index";
import AppRoutes from "./Routes/Router";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <AppRoutes />
    </ThemeProvider>
  );
}

export default App;
