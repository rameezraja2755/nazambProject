import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import DoneIcon from '@mui/icons-material/Done';

export default function InputAdornments() {
  const [values, setValues] = React.useState({
    amount: '',
  });
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  return (
    <Box sx={{}}>
      <div>
           
        <FormControl sx={{ m: 1, width: '296px' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-amount">Email</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type= 'text'
            value={values.amount}
            onChange={handleChange('Email')}
            label="Email"
          />
        </FormControl>
      </div>
    </Box>
  );
}
