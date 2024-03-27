import { Box, Button, Grid } from "@mui/material";
import Agreement from "../xbs-agreement/agreement";
import { useContext, useState } from "react";
import { agencyStepContext } from "../../contexts/agencyOnboardingContext";
import BackButton from "../xbs-buttons/next-back-button";

function AgencyAgreement() {
  
  const {activeStep, setActiveStep, scrollToStepper, isCompleted, setIsCompleted,isAgreementAccepted, setIsAgreementAccepted } = useContext(agencyStepContext);
  console.log("loading AgencyAgreement.." + activeStep + " isAgreementAccepted " + isAgreementAccepted + " isCompleted " + isCompleted);
  const handleBack = () => {
    console.log(" AgencyAgreement clicked back in step " + activeStep);
    setActiveStep(activeStep - 1);
    scrollToStepper();
  };

  const handleNext = () => {
      console.log(" AgencyAgreement clicked next in step " + activeStep);
      setIsCompleted(true);
      setActiveStep(activeStep + 1);
      scrollToStepper();
  }; 
  const onAgreementAccept = () => {
    debugger;
    setIsAgreementAccepted(true);
  };
 
    return (
      <Grid container spacing={2}>
      <Grid item xs={12} md={12}>
        <Agreement
          onAccept={onAgreementAccept}
          content={"Please read and accept the terms and conditions to proceed."}
        />
        
        <Box className="navigate-button-panel">
        {isAgreementAccepted && (
        <BackButton label="Continue"  onClick={handleNext}></BackButton>
        )}
        <BackButton label="Back" onClick={handleBack} ></BackButton>
        </Box>
      </Grid>
      </Grid>
      )
}
export default AgencyAgreement;