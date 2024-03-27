import { useContext } from "react";
import { Box, Grid } from "@mui/material";

import { agencyStepContext } from "../../contexts/agencyOnboardingContext";

import { BasicTextField } from "../xbs-input-fields/basic-text-field";
import CustomLabel from "../xbs-input-fields/label";
import BackButton from "../xbs-buttons/next-back-button";
import agencyRegImg from "../assets/images/agencyReg.svg";

import { validateEmail, validateRequired } from "../../utils/validateUtil";

function AgencyBasicDetails() {
  const { activeStep, setActiveStep, scrollToStepper, agencyData, setAgencyData  } =
    useContext(agencyStepContext);
  console.log("loading AgencyBasicDetails.." + activeStep);

  const handleNext = () => {
    console.log(" AgencyBasicDetails clicked next in step " + activeStep 
    + " -> "+ agencyData.nameOfAgency
    + " | "+ agencyData.mobile
    + " | "+ agencyData.alternativeMobile
    + " | "+ agencyData.officeEmail
    );
    setActiveStep(activeStep + 1);
    scrollToStepper();
  };

  const updateAgencyData = (event) => {
    const {name, value} = event.target;
    setAgencyData({...agencyData, [name]:value});
  }
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
            value={agencyData.nameOfAgency}
            onChange={updateAgencyData}
          />
        </div>
        <div className="text-box-style">
          <BasicTextField
            label="Contact Number"
            id="mobile"
            name="mobile"
            className="text-box-style w-90 custom-textfield"
            type="number"
            validate={validateRequired}
            value={agencyData.mobile}
            onChange={updateAgencyData}
          />
        </div>
        <div className="text-box-style">
          <BasicTextField
            label="Alternate contact Number"
            id="alternativeMobile"
            name="alternativeMobile"
            className="text-box-style w-90 custom-textfield"
            type="number"
            validate={validateRequired}
            value={agencyData.alternativeMobile}
            onChange={updateAgencyData}
          />
        </div>
        <div className="text-box-style">
          <BasicTextField
            label="Email"
            id="officeEmail"
            name="officeEmail"
            className="text-box-style w-90 custom-textfield"
            validate={validateEmail}
            value={agencyData.officeEmail}
            onChange={updateAgencyData}
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
