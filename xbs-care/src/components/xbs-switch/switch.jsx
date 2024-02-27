import React from 'react';
import Switch from '@mui/material/Switch';
import { Typography, Stack } from '@mui/material';
import '../assets/xbs-styles/styles.css'



const CustomSwitch = ({ label, checked, onChange }) => {
  const handleChange = (event) => {
    if(onChange) {
      onChange(event);
    }
    
    window.scrollTo({
      top: 600,
      behavior: 'smooth',
    });
  };

  return (

    <div className="custom-switch">
    <Stack direction="row" alignItems="center" spacing={1}>
      <Typography className="switch-label">{label}</Typography>
      <Typography>Yes</Typography>
      <div>
      <Switch checked={checked} onChange={handleChange} inputProps={{ 'aria-label': 'ant design' }} />
      </div>
      <Typography>No</Typography>
    </Stack>
    </div>
  );
};

export default CustomSwitch;
