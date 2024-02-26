import React from 'react';
import Switch from '@mui/material/Switch';
import { styled } from '@mui/material/styles';
import { Typography, Stack } from '@mui/material';
import '../assets/xbs-styles/styles.css'



const CustomSwitch = ({ label, checked, onChange }) => {
  return (
    <div className="custom-switch">
      <Typography className="switch-label">{label}</Typography>
      <Stack direction="row" spacing={1} alignItems="center">
        <Typography>Yes</Typography>
        <Switch checked={checked} onChange={onChange} inputProps={{ 'aria-label': 'ant design' }} />
        <Typography>No</Typography>
      </Stack>
    </div>
  );
};

export default CustomSwitch;