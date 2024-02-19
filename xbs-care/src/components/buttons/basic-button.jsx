import React from 'react';
import Button from '@mui/material/Button';
import useStyles from '../assets/custom-styles/styles';
import '../assets/css/button.css'
const BasicButton = ({ label, onClick, color = 'primary', variant = 'contained',type }) => {
    const classes = useStyles();

  return (
    <Button
      color={color}
      variant={variant}
      onClick={onClick}
      fullWidth
      className="roundedButton"
      type={type}
      
    >
      {label}
    </Button>
  );
};

export default BasicButton;