// CustomLabel.js
import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const CustomLabel = ({ text,  variant = 'body1' }) => {
  return (
    <Box>
      <Typography variant={variant} >
        {text}
      </Typography>
    </Box>
  );
};

export default CustomLabel;
