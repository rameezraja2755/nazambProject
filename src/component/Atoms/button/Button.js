import * as React from "react";
import Button from "@mui/material/Button";

export default function BasicButtons() {
  return (
    <Button
      variant='primary'
      type='submit'
      style={{
        Width: "144px",
        Height: "40px",
        Radius: "8px",
        marginTop: "20px",
      }}>
      sign in
    </Button>
  );
}
