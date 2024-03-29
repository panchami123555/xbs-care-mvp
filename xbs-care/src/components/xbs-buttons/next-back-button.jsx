import React from 'react';
import Button from '@mui/material/Button';
import useStyles from '../assets/custom-styles/styles';
import '../assets/xbs-styles/styles.css';

const BackButton = ({ label, onClick, color = 'primary', size = "small", variant = 'contained', type, style = '', disabled }) => {
  const classes = useStyles();


  return (
    <Button
      color={color}
      variant={variant}
      onClick={onClick}
      className="navigate-button"
      size={size}
      type={type}
      disabled={disabled}
    >
      {label}
    </Button>
  );
};

export default BackButton;
