import { useContext } from "react";
import AddressDetails from "../xbs-address/address";
import { Box, Grid } from "@mui/material";
import { agencyStepContext } from "../../contexts/agencyOnboardingContext";
import BackButton from "../xbs-buttons/next-back-button";

function AgencyAddressDetails() {
  const { activeStep, setActiveStep, scrollToStepper } =
    useContext(agencyStepContext);
  console.log("loading AgencyAddressDetails.." + activeStep);
  const handleBack = () => {
    console.log(" AgencyAddressDetails clicked back in step " + activeStep);
    setActiveStep(activeStep - 1);
    scrollToStepper();
  };

  const handleNext = () => {
    console.log(" AgencyAddressDetails clicked next in step " + activeStep);
    setActiveStep(activeStep + 1);
    scrollToStepper();
  };
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={12}>
        <AddressDetails></AddressDetails>
        <Box className="navigate-button-panel">
          <BackButton label="Back" onClick={handleBack}></BackButton>
          <BackButton label="Next" onClick={handleNext}></BackButton>
        </Box>
      </Grid>
    </Grid>
  );
}
export default AgencyAddressDetails;
