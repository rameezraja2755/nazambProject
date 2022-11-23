import React, { useEffect } from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import Alert from "@mui/material/Alert";

import { useAuth } from "../../../new_providerr/AuthProvider";

const myFlat = () => {
  const { logoutUser, user, error } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/");
      // console.log("navigatee", user, error);
    } else if (error) {
      <Alert severity="error">Error detected!</Alert>;
    }
  }, [user, error]);

  return (
    <>
      <div>myFlat</div>

      <Button type="submit" variant="primary" onClick={logoutUser()}> signout</Button>
    </>
  );
};

export default myFlat;
