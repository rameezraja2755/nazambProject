import React from "react"
import { Box } from "@mui/system"
import { Typography } from "@mui/material"
import {Link} from "@mui/material"

const MainNavbar = () => {
  return (
    <Box style={{width:"75%",height:"52px",display:"flex",justifyContent:"center",gap:"30px",alignItems:"center",color:"black",borderBottom:"1px solid #E8E8EA"}} className="MainNavbar">
      <Link style={{textDecoration:"none",color:"#1D9BD6",borderBottom:"5px solid #1D9BD6"}} to='/'>Board</Link>
      <Link style={{color:"#64C4BC",textDecoration:"none"}} to='/flatmates'>Flat mates</Link>
      <Link style={{color:"#64C4BC",textDecoration:"none"}} to='/myroom'>Myroom</Link>
    </Box>
  )
}

export default MainNavbar