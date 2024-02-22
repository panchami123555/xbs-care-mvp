// StepperComponent.js
import React, { useState } from 'react';
import { Box, Stepper, Step, StepLabel, Button } from '@mui/material';
import BasicButton from '../xbs-buttons/basic-button'

const StepperComponent = ({ getStepContent }) => {
  const [activeStep, setActiveStep] = useState(0);
  const steps = ['Agency Details', 'Address Details', 'Leadership Details', 'Documents'];

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {getStepContent(activeStep)}
        <Box  sx={{ display: 'flex', justifyContent: 'flex-end', paddingTop: '1rem', marginRight: '20px'  }}>
          <Button disabled={activeStep === 0} onClick={handleBack} variant="contained" sx={{ backgroundColor: '#123B94', '&:hover': { backgroundColor: '#0f2c6d' } }}>
            Back
          </Button>
          <Button onClick={handleNext} variant="contained" sx={{ backgroundColor: '#123B94', '&:hover': { backgroundColor: '#0f2c6d' } }}>
            {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
          </Button>
        </Box>
      </div>
    </Box>
  );
};

export default StepperComponent;
