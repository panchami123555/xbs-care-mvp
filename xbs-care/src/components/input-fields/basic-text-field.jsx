

import TextField from '@mui/material/TextField';
export const BasicTextField = ({ label, value,size, onChange }) => (
    <TextField label={label} value={value} onChange={onChange} fullWidth  size={size}/>
  );