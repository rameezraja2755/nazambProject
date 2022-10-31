import React from 'react';
import { Link, Router } from 'react-router-dom';
import { Box } from '@mui/system';


const NavbarBlue = () => {
  return (
          <Box >
           <Link to="/"> Home </Link>
            <Link to="/about"> About </Link>
          </Box>
    
  )
}

export default NavbarBlue;