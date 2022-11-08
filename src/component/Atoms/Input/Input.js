import * as React from "react";
import Box from "@mui/material/Box";
import { TextField } from "@mui/material";
import FormControl from "@mui/material/FormControl";

export default function InputAdornments({
  type,
  name,
  id,
  placeholder,
  value,
  onChange,
  onBlur,
  error,
}) {
  return (
    <Box sx={{}}>
      <div>
        <FormControl sx={{ m: 1, width: "296px" }}>
          <TextField
            error={error && true}
            id={id}
            type={type}
            value={value}
            onChange={onChange}
            name={name}
            label={placeholder}
            // placeholder={placeholder}
            onBlur={onBlur}
            helperText={error}
          />
        </FormControl>
      </div>
    </Box>
  );
}
