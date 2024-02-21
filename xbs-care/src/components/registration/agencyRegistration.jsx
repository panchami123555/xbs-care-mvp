import React from 'react';
import StepperComponents from '../stepper/stepper.jsx'; 
import AgencyDetailsForm from './agencyDetailsForm.jsx'; 
import HomeIcon from '@mui/icons-material/GroupOutlined';
import BusinessIcon from '@mui/icons-material/PlaceOutlined';
import GroupIcon from '@mui/icons-material/Person4Outlined';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFileOutlined'; 

const steps = [
  {
    label: 'Agency Details',
    content: <AgencyDetailsForm />,
    icon: <HomeIcon />, 
  },
  {
    label: 'Address Details',
    content: <AgencyDetailsForm />,
    icon: <BusinessIcon />, 
  },
  {
    label: 'Leadership Details',
    content: <AgencyDetailsForm />,
    icon: <GroupIcon />, 
  },
  {
    label: 'Documents',
    content: <AgencyDetailsForm />,
    icon: <InsertDriveFileIcon />, 
  },
];

export default function MyFormWithStepper() {
  return (
    <StepperComponents steps={steps} />
  );
}
