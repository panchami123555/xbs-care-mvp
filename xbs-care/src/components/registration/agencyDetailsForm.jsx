import React from 'react';
import { TextField, Grid } from '@mui/material';
import { BasicTextField } from '../input-fields/basic-text-field';

const AgencyDetailsForm = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
      <BasicTextField label="Name of Agency"    size='small' /> 
      </Grid>
      <Grid item xs={12} sm={6}>
      <BasicTextField label="Contact Number"    size='small'  /> 
      </Grid>
      <Grid item xs={12} sm={6}>
      <BasicTextField label="Alternate contact Number"    size='small'  /> 
      </Grid>
      <Grid item xs={12}>
      <BasicTextField label="Official Email Id"    size='small' /> 
      </Grid>
    </Grid>
  );
};

export default AgencyDetailsForm;
