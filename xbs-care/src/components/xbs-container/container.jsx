import React from 'react';
import { Container } from '@mui/material';

const defaultStyle = {
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const CustomContainer = ({ children, style }) => {
  return (
    <Container sx={{ ...defaultStyle, ...style }}>
      {children}
    </Container>    
  );
};  



export default CustomContainer;
