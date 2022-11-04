import * as React from "react";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";

export default function InputAdornments({
  type,
  name,
  id,
  placeholder,
  value,
  onChange,
  onBlur,
}) {

  return (
    <Box sx={{}}>
      <div>
        <FormControl sx={{ m: 1, width: "296px" }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-email">
            {placeholder}
          </InputLabel>
          <OutlinedInput
            id={id}
            type={type}
            value={value}
            onChange={onChange}
            name={name}
            placeholder={placeholder}
            onBlur={onBlur}
          />
        </FormControl>
      </div>
    </Box>
  );
}