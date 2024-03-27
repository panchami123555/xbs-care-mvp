import React, { useContext } from 'react';
import { Box, Step, Stepper } from '@mui/material';
import '../assets/xbs-styles/styles.css'
import StepButton from '@mui/material/StepButton';
import CustomLabel from '../xbs-input-fields/label';
import {agencyStepContext} from '../../contexts/agencyOnboardingContext';


const CustomStepperComponent = ({ getStepContent, isAuthorized, steps }) => {
  const {activeStep, setActiveStep, isCompleted, stepperRef, scrollToStepper} = useContext(agencyStepContext);
  console.log("reloading CustomStepperComponent")  

  const CustomStepIcon = (props) => {
    const { active, completed } = props;
    return (
      <div>
        {completed ? props.icon : props.icon}
      </div>
    );
  };

  const handleStep = (stepIndex) => () => {
    console.log('handleStep ' + stepIndex);
    setActiveStep(stepIndex);
    scrollToStepper();
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
        
          {getStepContent}
          
        </div>
      </Box>
    </div>
  );
};

export default CustomStepperComponent;
