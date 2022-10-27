import React, { useState } from "react";
//import { Children } from "react";
import { createContext } from "react";

export const userDetailContext = createContext();

const GlobalVar = ({ children }) => {
  const [userDetails] = useState({
    name: "nazamb",
    loggedIn: "false",
    rentPaid: 0,
  });

  return (
    <userDetailContext.Provider value={{...userDetails,sett}}>
      {children}
    </userDetailContext.Provider>
  );
};

export default GlobalVar;
