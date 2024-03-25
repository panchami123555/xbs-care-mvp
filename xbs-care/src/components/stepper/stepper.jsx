import React, { useState, useRef } from 'react';
import Diversity3OutlinedIcon from '@mui/icons-material/Diversity3Outlined';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import TextSnippetOutlinedIcon from '@mui/icons-material/TextSnippetOutlined';
import { Box, Button, Step, Stepper } from '@mui/material';
import '../assets/xbs-styles/styles.css'
import StepButton from '@mui/material/StepButton';
import Esignature from '@mui/icons-material/DriveFileRenameOutlineOutlined';
import CustomLabel from '../xbs-input-fields/label';
// import { useRouteMatch, useHistory } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const StepperComponent = ({ getStepContent, isAuthorized }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const stepperRef = useRef(null);
  // const history = useHistory();
  const navigate = useNavigate();
  const steps = [
    { label: 'Agency Details', icon: <PeopleOutlineIcon /> },
    { label: 'Address Details', icon: <GroupAddIcon /> },
    { label: 'Leadership Details', icon: <Diversity3OutlinedIcon /> },
    { label: 'Documents', icon: <TextSnippetOutlinedIcon /> },
    { label: 'E-signature', icon: <Esignature /> },
  ];

  const handleNext = () => {
    debugger
    const nextStep = activeStep + 1;
    if(nextStep == 4){
    if(isAuthorized == false){
        setActiveStep('5');
        setIsCompleted(true);
      } else{
        setActiveStep(nextStep);
      }
    } else {
      setActiveStep(nextStep);
    }
    if (nextStep === steps.length) {
      setIsCompleted(true);
    }
    scrollToStepper();
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    scrollToStepper();
  };

  const scrollToStepper = () => {
    if (stepperRef.current) {
      stepperRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const CustomStepIcon = (props) => {
    const { active, completed } = props;
    return (
      <div>
        {completed ? props.icon : props.icon}
      </div>
    );
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const currentStep = steps[activeStep];

  const shouldSkipStep4 = () => {
    return !isAuthorized && activeStep === 4;
  };

  return (
    <div ref={stepperRef}>
      <Box className="flex-grow-1 d-flex flex-column">
        {!isCompleted && (<CustomLabel text={"Welcome to XBS Care!"} type={'large'} />)}
        <Stepper activeStep={activeStep} className="stepper">
          {steps.map((step, index) => {
            const stepProps = {};
            const labelProps = {};
            if (!isAuthorized && index === 4) {
              return null;
            }
            return (
              <Step key={index} {...stepProps}>
                {!isCompleted && (
                  <div className={`step-container ${activeStep === index ? 'active-step' : 'inactive-step'}`}>
                    <StepButton onClick={handleStep(index)} icon={<CustomStepIcon icon={step.icon} />} {...labelProps}>
                      {step.label}
                    </StepButton>
                  </div>)}
              </Step>
            );
          })}
        </Stepper>
        <div>
          {getStepContent(activeStep)}
          {!isCompleted && (
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', paddingTop: '1rem', marginRight: '20px' }} className="d-flex ">
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                variant="contained"
                sx={{
                  borderRadius: '10px',
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
                  borderRadius: '10px',
                  backgroundColor: '#123B94',
                  '&:hover': { backgroundColor: '#0f2c6d' }
                }}
              >
                {activeStep === steps.length - 1 || (!isAuthorized && activeStep === 3) ? 'Finish' : 'Next'}
              </Button>
            </Box>
          )}
          {isCompleted && (
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', paddingTop: '1rem', marginRight: '20px' }} className="d-flex ">
              <Button
                variant="contained"
                sx={{
                  borderRadius: '10px',
                  backgroundColor: '#123B94',
                  '&:hover': { backgroundColor: '#0f2c6d' },
                }}
                onClick={() => navigate('/dashboard')}
              >
                Done
              </Button>
            </Box>
          )}
        </div>
      </Box>
    </div>
  );
};

export default StepperComponent;
