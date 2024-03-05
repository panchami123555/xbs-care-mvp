import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import '../assets/xbs-styles/styles.css';

const CustomCheckbox = ({ label, checked, onChange }) => {
  return (
    <div >
      <Checkbox
        checked={checked}
        onChange={onChange}
        inputProps={{ 'aria-label': 'controlled' }}
      />
      <label>{label}</label>
    </div>
  );
};

export default CustomCheckbox;
