import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

export default function BasicButtons() {
  // const Button = styled("button")({
  //   Width:"144px",
  //   Height:"40px",
  //   Radius:"8px",
  //   marginTop:"80px"
  // })
  return (
      <Button variant="primary" style={{  Width:"144px", Height:"40px",Radius:"8px",marginTop:"20px"}} type="submit">sign in</Button>
  );
}

