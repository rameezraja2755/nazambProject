import React from "react"
import { Typography } from "@mui/material"
import { Box } from "@mui/system"
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";


const Myroom = () => {

  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  
  return (
    <Box style={{display:"flex",gap:"100px",padding:"60px"}} className="RoomContainer">
      <Box className="ProfileImage">
        {/* <img style={{width:"200px",borderRadius:"100px",height:"200px"}} src={men} /> */}
        <Box style={{display:"flex",gap:"20px",alignItems:"center"}}>
          <Typography variant='subtitle2'>Language</Typography>
          <FormControl sx={{ m: 1, minWidth: 100 }}>
            <Select
              value={age}
              onChange={handleChange}
              displayEmpty
            > 
              <MenuItem value="">
                <Typography variant='subtitle1'>English</Typography>
              </MenuItem>
              <MenuItem value={10} variant="subtitle1">Urdu</MenuItem>
              <MenuItem value={20} variant="subtitle1">Hindi</MenuItem>
              <MenuItem value={30} variant="subtitle1">Shina</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>

      <Box className="ProfileForm">
        <Typography  style={{marginLeft:"10px"}} variant="subtitle1">Oleh Sheptyskyi</Typography>
        <Typography style={{marginTop:"10px",marginLeft:"10px"}} variant="subtitle1">Email</Typography>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "60ch",marginTop:2 },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField id="outlined-basic" label="Old Email" variant="outlined"  />
        </Box>
        <Typography style={{marginTop:"10px",marginLeft:"10px"}} variant="subtitle1">New Email</Typography>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "60ch",marginTop:2 },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField id="outlined-basic" label="New Email" variant="outlined" />
          <Typography variant='subtitle1'>Your username to sign in. All related emails will be sent to this email.</Typography>
        </Box>
        <Box style={{marginTop:"20px"}}>
          <Typography style={{marginTop:"10px",marginLeft:"10px"}} variant='subtitle1'>Old Password</Typography>
          <TextField style={{marginLeft:"10px"}} id="outlined-basic" label="Old Password" variant="outlined" />
        </Box>
        <Box style={{display:"flex",alignItems:"center",gap:"30px",marginTop:"20px"}}>
          <Box>
            <Typography style={{marginTop:"10px",marginLeft:"10px"}} variant='subtitle1'>New Password</Typography>
            <TextField style={{marginLeft:"10px"}} id="outlined-basic" label="New Password" variant="outlined" />
          </Box>
          <Box>
            <Typography style={{marginTop:"10px"}} variant='subtitle1'>Confirm New Password</Typography>
            <TextField  id="outlined-basic" label="Confirm New Password" variant="outlined" />
          </Box>
        </Box>

        <Box style={{display:"flex",gap:"30px",marginTop:"20px",marginLeft:"10px"}} classNam="FormButtons">
          <button style={{width:"105px",height:"40px",borderRadius:"8px",border:"none",fontweight:"500",backgroundColor:"#1D9BD6",color:"white",fontSize:"16px"}}>Save</button>
          <button style={{width:"105px",height:"40px",borderRadius:"8px",border:"none",fontweight:"500",backgroundColor:"#1D9BD6",color:"white",fontSize:"16px"}}>Close</button>
        </Box>
      </Box>





    </Box>
  )
}

export default Myroom