
import React from 'react';
import Alert from '@mui/material/Alert';

const CustomAlert = ({ severity, label }) => {
  return (
    <Alert severity={severity}>{label}</Alert>
  );
}

export default CustomAlert;
