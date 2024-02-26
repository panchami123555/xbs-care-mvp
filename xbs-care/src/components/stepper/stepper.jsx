// StepperComponent.js
import Diversity3OutlinedIcon from '@mui/icons-material/Diversity3Outlined';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import TextSnippetOutlinedIcon from '@mui/icons-material/TextSnippetOutlined';
import { Box, Button, Step, Stepper } from '@mui/material';
import React, { useState } from 'react';
import '../assets/xbs-styles/styles.css'
import StepButton from '@mui/material/StepButton';

const StepperComponent = ({ getStepContent }) => {
  const [activeStep, setActiveStep] = useState(0);
  const steps = [{ label: 'Agency Details', icon: <PeopleOutlineIcon /> },
  { label: 'Address Details', icon: <GroupAddIcon /> },
  { label: 'Leadership Details', icon: <Diversity3OutlinedIcon /> },
  { label: 'Documents', icon: <TextSnippetOutlinedIcon /> },
  ];


  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const CustomStepIcon = (props) => {
    const { active, completed } = props;

    return (
      <div

      >
        {completed ? props.icon : props.icon}
      </div>
    );
  };
  const handleStep = (step) => () => {
    setActiveStep(step);
  };
  const currentStep = steps[activeStep];
  return (
    <Box  className="flex-grow-1 d-flex flex-column">
      <Stepper activeStep={activeStep} className="stepper" >
        {steps.map((step, index) => {
          const stepProps = {};
          const labelProps = {};

          return (
            <Step key={index} {...stepProps} >
              <div className={`step-container ${activeStep === index ? 'active-step' : 'inactive-step'}`}>
                <StepButton onClick={handleStep(index)} icon={<CustomStepIcon icon={step.icon} />} {...labelProps}>


                  {step.label}

                </StepButton>
              </div>
            </Step>

          );

        })}
      </Stepper>
      <div>
        {getStepContent(activeStep)}
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', paddingTop: '1rem', marginRight: '20px' }} className="d-flex ">
          <Button
            disabled={activeStep === 0}
            onClick={handleBack}
            variant="contained"
            sx={{
              backgroundColor: '#123B94',
              '&:hover': { backgroundColor: '#0f2c6d' },
              marginRight: '8px' // Add right margin to the first button
            }}
          >
            Back
          </Button>
          <Button
            onClick={handleNext}
            variant="contained"
            sx={{
              backgroundColor: '#123B94',
              '&:hover': { backgroundColor: '#0f2c6d' }
            }}
          >
            {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
          </Button>
        </Box>

      </div>
    </Box>
  );
};

export default StepperComponent;
