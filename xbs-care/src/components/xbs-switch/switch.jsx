import React from 'react';
import Switch from '@mui/material/Switch';
import { styled } from '@mui/material/styles';
import { Typography, Stack } from '@mui/material';
import '../assets/xbs-styles/styles.css'



const CustomSwitch = ({ label, checked, onChange }) => {
  debugger
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
      <Typography style={{paddingLeft:'1%', paddingTop:'1%'}}>Yes</Typography>
      <div  style={{paddingLeft:'1%', paddingTop:'1%'}}>
      <Switch checked={checked} onChange={handleChange} inputProps={{ 'aria-label': 'ant design' }} />
      </div>
      <Typography style={{paddingLeft:'1%', paddingTop:'1%'}}>No</Typography>
    </Stack>
    </div>

//     <div className="custom-switch">
//   <Typography className="switch-label">{label}</Typography>
//   <Stack direction="row" spacing={1} alignItems="center">
//     <Typography>Yes</Typography>
//     <Switch checked={checked} onChange={onChange} inputProps={{ 'aria-label': 'ant design' }} />
//     <Typography>No</Typography>
//   </Stack>
// </div>
  );
};

export default CustomSwitch;
