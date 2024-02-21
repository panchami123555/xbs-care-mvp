import React from 'react';
import Button from '@mui/material/Button';
import useStyles from '../assets/custom-styles/styles';
import '../assets/xbs-styles/button.css'
const BackButton = ({ label, onClick , color = 'primary', variant = 'contained',type,style='' }) => {
    const classes = useStyles();

  return (
    <Button
      color={color}
      variant={variant}
      onClick={onClick}
      fullWidth
      size="small"
      type={type}

    >
      {label}
    </Button>
  );
};

export default BackButton;