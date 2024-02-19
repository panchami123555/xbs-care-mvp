import TextField from '@mui/material/TextField';



export const TextareaField = ({ label, value, onChange }) => (
    <TextField
    id="outlined-multiline-static"
   
    multiline
    rows={4}
    label={label}
     value={value} 
      onChange={onChange}
    
  />
   
  );