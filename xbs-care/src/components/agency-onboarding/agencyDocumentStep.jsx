import { Box, Grid } from "@mui/material";
import { validateRequired } from "../../utils/validateUtil";
import FileUploadComponent from "../xbs-input-fields/basic-file-upload";
import { BasicTextField } from "../xbs-input-fields/basic-text-field";
import CustomLabel from "../xbs-input-fields/label";
import { useContext } from "react";
import { agencyStepContext } from "../../contexts/agencyOnboardingContext";
import BackButton from "../xbs-buttons/next-back-button";

function AgencyDocuments() {
  const { activeStep, setActiveStep, scrollToStepper } =
    useContext(agencyStepContext);
  console.log("loading AgencyDocuments.." + activeStep);

  const handleBack = () => {
    console.log(" AgencyDocuments clicked back in step " + activeStep);
    setActiveStep(activeStep - 1);
    scrollToStepper();
  };

  const handleNext = () => {
    console.log(" AgencyDocuments clicked next in step " + activeStep);
    setActiveStep(activeStep + 1);
    scrollToStepper();
  };
  return (
    <Box>
      <CustomLabel text={"Almost Done"} type={"large"} />
      <CustomLabel
        text={"Please upload relevant agency documents"}
        type={"normal"}
      />
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <div className="text-box-style">
            <BasicTextField
              label="Name"
              id="name"
              className="w-100 custom-textfield"
              validate={validateRequired}
            />
          </div>
        </Grid>
        <Grid item xs={12} md={4}>
          <div className="text-box-style">
            <BasicTextField
              label="Type"
              id="type"
              className="w-100 custom-textfield"
              validate={validateRequired}
            />
          </div>
        </Grid>
        <Grid item xs={12} md={4}>
          <div className="file-upload-style">
            <FileUploadComponent />
          </div>
        </Grid>
      </Grid>
      <Box className="navigate-button-panel">
        <BackButton label="Back" onClick={handleBack}></BackButton>
        <BackButton label="Next" onClick={handleNext}></BackButton>
      </Box>
    </Box>
  );
}

export default AgencyDocuments;
