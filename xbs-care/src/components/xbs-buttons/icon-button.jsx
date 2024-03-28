import React from 'react';
import IconButton from '@mui/material/IconButton';
import '../assets/xbs-styles/styles.css'
const Icon = ({onClick , color = 'primary', variant = 'contained',type,disabled ,className, icon }) => {
    // const classes = useStyles();

  return (
    <IconButton
      color={color}
      variant={variant}
      onClick={onClick} 
      className={className}
      type={type}
      disabled={disabled}>
      {icon}
    </IconButton>
  );
};

export default Icon;