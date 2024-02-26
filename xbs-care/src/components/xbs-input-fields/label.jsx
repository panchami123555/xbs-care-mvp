import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const styles = {
  large: {
    color: '#194A9F',
    fontSize: '20px',
    fontWeight: 600,
    lineHeight: 'normal',
    width: '100%',
    textAlign: 'left',
    marginBottom: '1rem',
    paddingTop: '3%',
  },
  medium: {
    color: '#194A9F',
    fontSize: '15px',
    fontWeight: 600,
    lineHeight: 'normal',
    width: '100%',
    textAlign: 'left',
    marginBottom: '1rem',
    paddingTop: '2%',
  },
  normal: {
    fontSize: '15px',
    fontWeight: 600,
    lineHeight: 'normal',
    width: '100%',
    textAlign: 'left',
    marginBottom: '1rem',
    paddingTop: '2%',
  },
};

const CustomLabel = ({ text, variant = 'body1', type }) => {
  const style = styles[type] || styles.normal;

  return (
    <Box>
      <Typography variant={variant} sx={style}>
        {text}
      </Typography>
    </Box>
  );
};

export default CustomLabel;
