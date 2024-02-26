import TextField from '@mui/material/TextField';
import React, { useState } from 'react';

export const BasicTextField = ({ label, value, size, onChange, validate, required, style, fullwidth,className }) => {
  


  return (
    <TextField
      label={label}
      value={value}
      onChange={onChange}
      fullWidth={fullwidth}
      size={size}
      required={required}
      sx={style}
      className={className}
    />
  );
};
