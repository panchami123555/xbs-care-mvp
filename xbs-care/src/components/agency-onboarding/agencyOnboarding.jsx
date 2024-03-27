import { useContext, useState } from "react";

import { Box } from "@mui/material";
import { agencyStepContext } from "../../contexts/agencyOnboardingContext";
import CustomContainer from "../xbs-container/container";
import CustomCard from "../xbs-card/card";

import xbsCareLogo from "../assets/images/carelogo.svg";

import Diversity3OutlinedIcon from "@mui/icons-material/Diversity3Outlined";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import TextSnippetOutlinedIcon from "@mui/icons-material/TextSnippetOutlined";
import Esignature from "@mui/icons-material/DriveFileRenameOutlineOutlined";
import AgencyBasicDetails from "./agencyBasicStep";

import AgencyAccountDetails from "./agencyAccountStep";
import AgencyDocuments from "./agencyDocumentStep";
import AgencyAgreement from "./agencyAgreementStep";
import AgencyAllSet from "./agencyAllSetStep";
import CustomStepperComponent from "../stepper/custom-stepper";
import AgencyAddressDetails from "./agencyAddressStep";

function AgencyOnboarding() {
  const { activeStep, agencyData } = useContext(agencyStepContext);
  console.log("AgencyOnboarding - activeStep " + activeStep);
  const [isAuthorized, setIsAuthorized] = useState(true);
  const getStepContent = (step) => {
    console.log("getStepContent " + activeStep);
    switch (step) {
      case 0:
        return <AgencyBasicDetails></AgencyBasicDetails>;
      case 1:
        return <AgencyAddressDetails></AgencyAddressDetails>;
      case 2:
        return <AgencyAccountDetails></AgencyAccountDetails>;
      case 3:
        return <AgencyDocuments></AgencyDocuments>;
      case 4:
        return <AgencyAgreement></AgencyAgreement>;
      default:
        return <AgencyAllSet></AgencyAllSet>;
    }
  };

  return (
    <Box className="stepper-Box">
      <Box className="logoContainer">
        <img src={xbsCareLogo} alt="Logo" className="logoImage" />
      </Box>

      <CustomContainer>
        <CustomCard
          title={"Welcome to XBS Care!"}
          content={
            <CustomStepperComponent
              getStepContent={getStepContent(activeStep)}
              isAuthorized={isAuthorized}
              steps={[
                { label: "Agency Details", icon: <PeopleOutlineIcon /> },
                { label: "Address Details", icon: <GroupAddIcon /> },
                {
                  label: "Leadership Details",
                  icon: <Diversity3OutlinedIcon />,
                },
                { label: "Documents", icon: <TextSnippetOutlinedIcon /> },
                { label: "E-signature", icon: <Esignature /> },
              ]}
            />
          }
        />
      </CustomContainer>
    </Box>
  );
}

export default AgencyOnboarding;
