import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import allSetImg from "../assets/images/allset.svg";
import { Box, Grid } from "@mui/material";
import CustomLabel from "../xbs-input-fields/label";
import { agencyStepContext } from "../../contexts/agencyOnboardingContext";
import BackButton from "../xbs-buttons/next-back-button";

function AgencyAllSet() {
  const {
    activeStep,
    setActiveStep,
    scrollToStepper,
    isCompleted,
    setIsCompleted,
  } = useContext(agencyStepContext);
  console.log("loading AgencyAllSet.." + activeStep);
  const navigate = useNavigate();
  const handleBack = () => {
    console.log(" AgencyAllSet clicked back in step " + activeStep);
    setActiveStep(activeStep - 1);
    scrollToStepper();
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <Grid container spacing={2} alignItems="center" justifyContent="center">
          <Grid item xs={12} md={6} className="image-grid">
            <img src={allSetImg} className="image-allset-style" />
          </Grid>
          <Grid item xs={12} md={6}>
            <CustomLabel text={"You are all set!"} type={"allSet"}>
              {" "}
            </CustomLabel>
          </Grid>
        </Grid>

        {isCompleted && (
          <Box className="navigate-button-panel">
            <BackButton label="Done" onClick={() => navigate("/dashboard")}>
              Done
            </BackButton>
          </Box>
        )}
      </Grid>
    </Grid>
  );
}

export default AgencyAllSet;
