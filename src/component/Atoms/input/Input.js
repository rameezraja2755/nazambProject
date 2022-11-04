import * as React from "react";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";

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
  // const handleChange = (prop) => (event) => {
  //   setValues({ ...values, [prop]: event.target.value });
  // };
  return (
    <Box>
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
        {/* <InputLabel htmlFor='outlined-adornment-email'>
          {placeholder}
        </InputLabel>
        <OutlinedInput
          // id='outlined'
          type={type}
          value={value}
          onChange={onChange}
          name={name}
          // placeholder={placeholder}
          onBlur={onBlur}
        /> */}
      </FormControl>
    </Box>
  );
}
