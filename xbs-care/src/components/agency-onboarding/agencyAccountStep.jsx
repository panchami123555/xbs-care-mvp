import CustomAccordion from "../xbs-accordion/accordion";
import { BasicTextField } from "../xbs-input-fields/basic-text-field";
import CustomLabel from "../xbs-input-fields/label";

import agencyLedImg from "../assets/images/agencyLed.svg";
import CustomCheckbox from "../xbs-buttons/basic-checkbox";
import { Box, Button, Grid } from "@mui/material";
import { validateEmail, validateRequired } from "../../utils/validateUtil";
import { useContext, useState } from "react";
import { agencyStepContext } from "../../contexts/agencyOnboardingContext";
import BackButton from "../xbs-buttons/next-back-button";

function AgencyAccountDetails({}) {
  const { activeStep, setActiveStep, scrollToStepper } =
    useContext(agencyStepContext);
  console.log("loading AgencyAccountDetails.." + activeStep);
  const handleBack = () => {
    console.log(" AgencyAccountDetails clicked back in step " + activeStep);
    setActiveStep(activeStep - 1);
    scrollToStepper();
  };

  const handleNext = () => {
    console.log(" AgencyAccountDetails clicked next in step " + activeStep);
    setActiveStep(activeStep + 1);
    scrollToStepper();
  };

  const [isAuthorized, setIsAuthorized] = useState(false);
  const handleAuthorizedChange = (event) => {
    setIsAuthorized(event.target.checked);
    const signedEmail = localStorage.getItem("email");
    // const leadershipEmail = document.getElementById(':r13:')?.value;
    // console.log('Leadership email', leadershipEmail);
    // if (signedEmail === leadershipEmail) {
    //   setIsAuthorized(true);
    // } else {
    //   setIsAuthorized(false);
    // }
  };

  return (
    <Box>
      <CustomLabel text={"Tell us more about yourself.."} type={"large"}>
        {" "}
      </CustomLabel>
      <CustomAccordion summary="Account Details" defaultExpanded={true}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <div className="text-box-style">
              <BasicTextField
                label="Date of Incoperation"
                id="dateOfIncorporation"
                name="dateOfIncorporation"
                className="w-90 custom-textfield"
                validate={validateRequired}
                //   value={agencyFormData.dateOfIncorporation} onChange={agencyBasicDataChange}
              />
            </div>
            <div className="text-box-style">
              <BasicTextField
                label="Company Website"
                id="compWebsite"
                className="w-90 custom-textfield"
                validate={validateRequired}
                //   value={agencyFormData.website} onChange={agencyBasicDataChange}
              />
            </div>
            <div className="text-box-style">
              <BasicTextField
                label="Company Registration Number"
                id="compRegNumber"
                className="w-90 custom-textfield"
                validate={validateRequired}
              />
            </div>
            <div className="text-box-style">
              <BasicTextField
                label="Unique Taxpayer Reference (UTR)"
                id="uniqueTaxRef"
                className="w-90 custom-textfield"
                validate={validateRequired}
              />
            </div>
            <div className="text-box-style">
              <BasicTextField
                label="Number of Resources"
                id="nResources"
                className="w-90 custom-textfield"
                validate={validateRequired}
                //   value={agencyFormData.noOfResources} onChange={agencyBasicDataChange}
              />
            </div>
            <div className="text-box-style">
              <BasicTextField
                label="Number of Clients"
                id="nClients"
                className="w-90 custom-textfield"
                validate={validateRequired}
                //   value={agencyFormData.noOfClients} onChange={agencyBasicDataChange}
              />
            </div>
          </Grid>
          <Grid item xs={12} md={6} className="image-grid">
            <img src={agencyLedImg} className="image-led-style" />
          </Grid>
        </Grid>
      </CustomAccordion>
      <CustomAccordion summary="Leadership Details" defaultExpanded={true}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <div className="text-box-style">
              <BasicTextField
                label="Role"
                id="role"
                className="w-100 custom-textfield"
                validate={validateRequired}
              />
            </div>
            <div className="text-box-style">
              <BasicTextField
                label="Email"
                id="email"
                className="w-100 custom-textfield"
                validate={validateEmail}
              />
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <div className="text-box-style">
              <BasicTextField
                label="Name"
                id="name"
                className="w-100 custom-textfield"
                validate={validateRequired}
              />
            </div>
            <div className="text-box-style">
              <BasicTextField
                label="Phone"
                id="phone"
                className="w-100 custom-textfield"
                validate={validateRequired}
              />
            </div>
          </Grid>
          <Grid item xs={12}>
            <CustomCheckbox
              label="Authorized Signatory"
              checked={isAuthorized}
              onChange={handleAuthorizedChange}
            />
          </Grid>
          <Grid item xs={12}>
            <CustomLabel
              text={"Address (Optional)"}
              className="w-100"
              type={"normal"}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <div className="text-box-style">
              <BasicTextField
                label="Street Address"
                id="address"
                className="w-100 custom-textfield"
                validate={validateRequired}
              />
            </div>
            <div className="text-box-style">
              <BasicTextField
                label="Town/ City"
                id="townCity"
                className="w-100 custom-textfield"
                validate={validateRequired}
              />
            </div>
            <div className="text-box-style">
              <BasicTextField
                label="Country (optional)"
                id="countryOptional"
                className="w-100 custom-textfield"
              />
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <div className="text-box-style">
              <BasicTextField
                label="Locality (Optional)"
                id="local"
                className="w-100 custom-textfield"
              />
            </div>
            <div className="text-box-style">
              <BasicTextField
                label="Postal Code"
                id="postCode"
                className="w-100 custom-textfield"
                validate={validateRequired}
              />
            </div>
            <div className="text-box-style">
              <BasicTextField
                label="Country"
                id="country"
                className="w-100 custom-textfield"
                validate={validateRequired}
              />
            </div>
          </Grid>
        </Grid>
      </CustomAccordion>
      <Box className="navigate-button-panel">
        <BackButton label="Back" onClick={handleBack}></BackButton>
        <BackButton label="Next" onClick={handleNext}></BackButton>
      </Box>
    </Box>
  );
}

export default AgencyAccountDetails;
