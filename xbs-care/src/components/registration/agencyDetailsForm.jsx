import React from 'react';
import { TextField, Grid } from '@mui/material';

const AgencyDetailsForm = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextField
          fullWidth
          label="Name of Agency"
          variant="outlined"
          required
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          label="Contact Number"
          variant="outlined"
          type="tel"
          required
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          label="Alternate Contact Number"
          variant="outlined"
          type="tel"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          label="Official Email ID"
          variant="outlined"
          type="email"
          required
        />
      </Grid>
    </Grid>
  );
};

export default AgencyDetailsForm;
