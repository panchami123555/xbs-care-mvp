import TextField from '@mui/material/TextField';
import React, { useState } from 'react';

export const BasicTextField = ({ label, value, size, onChange, validate }) => {
  


  return (
    <TextField
      label={label}
      value={value}
      onChange={onChange}
      fullWidth
      size={size}
      
    />
  );
};