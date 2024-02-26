import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import styles from './customLabelStyles.jsx';

const CustomLabel = ({ text, variant = 'body1', type ,color=""}) => {
  const style = styles[type] || styles.normal;

  return (
    <Box>
      <Typography variant={variant} sx={style} color={color}>
        {text}
      </Typography>
    </Box>
  );
};

export default CustomLabel;
