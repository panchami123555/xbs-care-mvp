import TextField from '@mui/material/TextField';
import React, { useState } from 'react';

export const BasicTextField = ({
  label,
  value,
  size,
  onChange,
  validate,
  // required,
  style,
  fullwidth,
  className,
  type
}) => {
  const [error, setError] = useState(false);
  const [helperText, setHelperText] = useState('');

  const handleChange = (event) => { 
    const { value } = event.target;

    if (onChange) {
      onChange(event);
    }

    if (validate) {
      const validationResult = validate(value);
      if (validationResult.isValid) {
        setError(false);
        setHelperText('');
      } else {
        setError(true);
        setHelperText(validationResult.message);
      }
    }
  };

  return (
    <TextField
      label={label}
      value={value}
      onChange={handleChange} 
      fullWidth={fullwidth}
      size={size}
      required
      sx={style}
      className={className}
      error={error}
      helperText={helperText}
      type={type}
    />
  );
};
