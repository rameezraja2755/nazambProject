import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { TextField } from "@mui/material";

export default function InputAdornments({
  name,
  onChange,
  value,
  error,
}) {
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <Box sx={{ textAlign: "center", alignItems: "center" }}>
      <div>
        <FormControl sx={{ m: 1, width: "296px" }} variant="outlined">
          {/* <InputLabel htmlFor='outlined-adornment-password'>
            {placeholder}
          </InputLabel> */}
          <TextField
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            value={value}
            error={error && true}
            name={name}
            helperText={error}
            onChange={onChange}
            endAdornment={(
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => setShowPassword(!showPassword)}
                  // onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            )}
            label="Password"
          />
        </FormControl>
      </div>
    </Box>
  );
}
