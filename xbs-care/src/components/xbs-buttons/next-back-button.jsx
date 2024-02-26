import React from 'react';
import Button from '@mui/material/Button';
import useStyles from '../assets/custom-styles/styles';
import '../assets/xbs-styles/styles.css';

const BackButton = ({ label, onClick, color = 'primary', size = "small", variant = 'contained', type, style = '', disabled }) => {
  const classes = useStyles();

  const handleClick = (e) => {
    if (onClick) onClick(e);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Button
      color={color}
      variant={variant}
      onClick={handleClick} // Use the enhanced click handler
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
