import React from 'react';
import Button from '@mui/material/Button';
import useStyles from '../assets/custom-styles/styles';
import '../assets/xbs-styles/styles.css'
const BasicButton = ({ label, onClick , color = 'primary', variant = 'contained',type,style='',disabled ,className, endIcon, startIcon, fullWidth }) => {
    const classes = useStyles();

  return (
    <Button
      color={color}
      variant={variant}
      onClick={onClick} 
      fullWidth = {fullWidth}
      className={className}
      type={type}
      disabled={disabled}
      endIcon = {endIcon}
      startIcon = {startIcon}
    >
      {label}
    </Button>
  );
};

export default BasicButton;