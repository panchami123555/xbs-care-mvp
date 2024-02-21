import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import StepButton from '@mui/material/StepButton';
import Check from '@mui/icons-material/Check';
const CustomStepIcon = (props) => {
  const { active, completed } = props;

  return (
    <div
      style={{
        width: 24,
        height: 24,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
       
       
        color: 'black',
      }}
    >
      {completed ? props.icon  : props.icon}
    </div>
  );
};
export default function StepperComponents({ steps }) {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const isStepOptional = (step) => {
    return step === 5;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };
 const handleStep = (step) => () => {
    setActiveStep(step);
  };
  const currentStep = steps[activeStep];

  return (
    <div>
     
        <Box sx={{ flexGrow: 1 , }}>
      
          <Card elevation={20} sx={{ width: 'calc(100% - 10rem)', margin: 'auto', marginTop: 2,boxShadow: '0 0 10px #194A9F' ,
          borderRadius:'2rem' ,overflowY: 'auto', 
          maxHeight: '500px',
       }}>
            <CardContent>
            <Grid container spacing={2}>
        <Grid item xs={12} md={12} lg={12} sx={{ margin: 'auto' }}>
              <Stepper activeStep={activeStep}  sx={{backgroundColor:'#F4F4F4',borderRadius:'10px'}}  >
                {steps.map((step, index) => {
                  const stepProps = {};
                  const labelProps = {};
                  if (isStepOptional(index)) {
                    labelProps.optional = (
                      <Typography variant="caption">Optional</Typography>
                    );
                  }
                  if (isStepSkipped(index)) {
                    stepProps.completed = false;
                  }
                  return (
                    <Step key={index} {...stepProps} >
                      <div style={{
                            borderRadius: '10px',
                            border:  activeStep === index ? '2px solid #00A2E7' : '2px solid #D9D9D9',
                            padding: '8px',
                           
                          }}>
                        <StepButton onClick={handleStep(index)} icon={<CustomStepIcon icon={step.icon} />} {...labelProps}>
                          
                        
                            {step.label}
                        
                        </StepButton>
                        </div>
                      </Step>
                       
                  );

                })}
              </Stepper>
          
              {activeStep === steps.length ? (
                <React.Fragment>
                  <Typography sx={{ mt: 2, mb: 1 }}>
                    All steps completed - you&apos;re finished
                  </Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                    <Box sx={{ flex: '1 1 auto' }} />
                    <Button onClick={handleReset}>Reset</Button>
                  </Box>
                </React.Fragment>
              ) : (
                <React.Fragment>
                      
                  <div style={{marginTop:'-1rem'}}>{currentStep.component}</div>
                  <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                {activeStep !== 0 && (
                  <Button variant="contained" onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    Back
                  </Button>
                )}

                <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 3, ml: 1 }}
                >
                  {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                </Button>
              </Box>
                </React.Fragment>
              )}
              </Grid>
      </Grid>
            </CardContent>
          </Card>
        
    </Box>
       
    </div>
  );
}
