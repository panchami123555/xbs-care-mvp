import { useContext } from "react";
import { Box, Grid } from "@mui/material";

import { agencyStepContext } from "../../contexts/agencyOnboardingContext";

import { BasicTextField } from "../xbs-input-fields/basic-text-field";
import CustomLabel from "../xbs-input-fields/label";
import BackButton from "../xbs-buttons/next-back-button";
import agencyRegImg from "../assets/images/agencyReg.svg";

import { validateEmail, validateRequired } from "../../utils/validateUtil";

function AgencyBasicDetails() {
  const { activeStep, setActiveStep, scrollToStepper } =
    useContext(agencyStepContext);
  console.log("loading AgencyBasicDetails.." + activeStep);

  const handleNext = () => {
    console.log(" AgencyBasicDetails clicked next in step " + activeStep);
    setActiveStep(activeStep + 1);
    scrollToStepper();
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <CustomLabel text={"Let’s set you up!"} type={"large"}>
          {" "}
        </CustomLabel>

        <div className="text-box-style">
          <BasicTextField
            label="Name of Agency"
            id="nameOfAgency"
            name="nameOfAgency"
            className="text-box-style w-120 custom-textfield"
            validate={validateRequired}
          />
        </div>
        <div className="text-box-style">
          <BasicTextField
            label="Contact Number"
            id="contactNumber"
            name="contactNumber"
            className="text-box-style w-90 custom-textfield"
            type="number"
            validate={validateRequired}
          />
        </div>
        <div className="text-box-style">
          <BasicTextField
            label="Alternate contact Number"
            id="alternateContactNumber"
            name="alternateContactNumber"
            className="text-box-style w-90 custom-textfield"
            type="number"
            validate={validateRequired}
          />
        </div>
        <div className="text-box-style">
          <BasicTextField
            label="Email"
            id="email"
            name="email"
            className="text-box-style w-90 custom-textfield"
            validate={validateEmail}
          />
        </div>
        <Box className="navigate-button-panel">
          <BackButton label="Next" onClick={handleNext}></BackButton>
        </Box>
      </Grid>
      <Grid item xs={12} md={6} className="image-grid">
        <img src={agencyRegImg} className="image-style" />
      </Grid>
    </Grid>
  );
}
export default AgencyBasicDetails;
