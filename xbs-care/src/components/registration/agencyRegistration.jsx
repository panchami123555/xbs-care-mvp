import { React, useState, useEffect, useRef } from 'react';
import { Box, Grid, Button } from '@mui/material';
import StepperComponent from '../stepper/stepper.jsx';
import '../assets/xbs-styles/agencyRegister.css';
import '../assets/xbs-styles/styles.css';
import xbsCareLogo from '../assets/images/carelogo.svg';
import CustomLabel from '../xbs-input-fields/label.jsx';
import { BasicTextField } from '../xbs-input-fields/basic-text-field.jsx';
import CustomAccordion from '../xbs-accordion/accordion.jsx';
import CustomSwitch from '../xbs-switch/switch.jsx';
import CustomCard from '../xbs-card/card.jsx';
import CustomContainer from '../xbs-container/container.jsx';
import agencyRegImg from '../assets/images/agencyReg.svg'
import agencyLedImg from '../assets/images/agencyLed.svg'
import AddressDetails from '../xbs-address/address.jsx';
import FileUploadComponent from '../xbs-input-fields/basic-file-upload.jsx'
import Agreement from '../xbs-agreement/agreement.jsx';
import allSetImg from '../assets/images/allset.svg';
import CustomCheckbox from '../xbs-buttons/basic-checkbox.jsx';

function RegistrationForm() {
  localStorage.setItem('email', 'example@example.com');
  const [isTradingAddressSame, setIsTradingAddressSame] = useState(false);
  const tradingAddressRef = useRef(null);
  const handleToggleChange = (event) => {
    setIsTradingAddressSame(event.target.checked);
  };
  const [agreementAccepted, setAgreementAccepted] = useState(false);
  const onAgreementAccept = () => {
    setAgreementAccepted(true);
  };
  const validateRequired = value => {
    return value.trim() ? { isValid: true } : { isValid: false, message: "This field is required." };
  };

  const validateEmail = value => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(value) ? { isValid: true } : { isValid: false, message: "Invalid email format." };
  };
  const [isAuthorized, setIsAuthorized] = useState(false);
  const handleAuthorizedChange = (event) => {
    // setIsAuthorized(event.target.checked);
    const signedEmail = localStorage.getItem('email');
    const leadershipEmail = document.getElementById(':r13:')?.value;
    console.log('Leadership email', leadershipEmail);
    if (signedEmail === leadershipEmail) {
      setIsAuthorized(true);
    } else {
      setIsAuthorized(false);
    }
  };
  useEffect(() => {
    if (isTradingAddressSame && tradingAddressRef.current) {
      tradingAddressRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [isTradingAddressSame]);
  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Box>
                <CustomLabel text={"Let’s set you up!"} type={'large'}> </CustomLabel>
                <div className='text-box-style'><BasicTextField
                  label="Name of Agency"
                  id="nameOfAgency"
                  className='text-box-style w-120 custom-textfield'
                  validate={validateRequired}
                />
                </div>
                <div className='text-box-style'><BasicTextField label="Contact Number" id="contactNumber" className='text-box-style w-90 custom-textfield' type='number' validate={validateRequired}/></div>
                <div className='text-box-style'><BasicTextField label="Alternate contact Number" id="alternateContactNumber" className='text-box-style w-90 custom-textfield' type='number' validate={validateRequired}/></div>
                <div className='text-box-style'><BasicTextField label="Email" id="email" className='text-box-style w-90 custom-textfield' validate={validateEmail} /></div>
              </Box>
            </Grid>
            <Grid item xs={12} md={6} className='image-grid'>
              <img src={agencyRegImg} className='image-style' />
            </Grid>
          </Grid>
        );

      case 1:
        return (
         <AddressDetails ></AddressDetails>
        );
      case 2:
        return (
          <Box>
            <CustomLabel text={"Tell us more about yourself.."} type={'large'}> </CustomLabel>
            <CustomAccordion summary="Account Details" defaultExpanded={true}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <div className='text-box-style'><BasicTextField label="Date of Incoperation" id="dateIncoperation" className='w-90 custom-textfield' validate={validateRequired}/></div>
                  <div className='text-box-style'><BasicTextField label="Company Website" id="compWebsite" className='w-90 custom-textfield' validate={validateRequired}/></div>
                  <div className='text-box-style'><BasicTextField label="Company Registration Number" id="compRegNumber" className='w-90 custom-textfield' validate={validateRequired}/></div>
                  <div className='text-box-style'><BasicTextField label="Unique Taxpayer Reference (UTR)" id="uniqueTaxRef" className='w-90 custom-textfield' validate={validateRequired}/></div>
                  <div className='text-box-style'><BasicTextField label="Number of Resources" id="nResources" className='w-90 custom-textfield' validate={validateRequired}/></div>
                  <div className='text-box-style'><BasicTextField label="Number of Clients" id="nClients" className='w-90 custom-textfield' validate={validateRequired}/></div>
                </Grid>
                <Grid item xs={12} md={6} className='image-grid'>
                  <img src={agencyLedImg} className='image-led-style' />
                </Grid>
              </Grid>
            </CustomAccordion>
            <CustomAccordion summary="Leadership Details" defaultExpanded={true}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <div className='text-box-style'><BasicTextField label="Role" id="role" className='w-100 custom-textfield' validate={validateRequired}/></div>
                  <div className='text-box-style'><BasicTextField label="Email" id="email" className='w-100 custom-textfield' validate={validateEmail}/></div>
                </Grid>
                <Grid item xs={12} md={6}>
                  <div className='text-box-style'><BasicTextField label="Name" id="name" className='w-100 custom-textfield' validate={validateRequired}/></div>
                  <div className='text-box-style'><BasicTextField label="Phone" id="phone" className='w-100 custom-textfield' validate={validateRequired}/></div>
                </Grid>
                <Grid item xs={12}>
                <CustomCheckbox
                label="Authorized Signatory"
                checked={isAuthorized}
                onChange={handleAuthorizedChange}
              />
                </Grid>
                <Grid item xs={12}>
                  <CustomLabel text={"Address (Optional)"} className='w-100' type={'normal'} />
                </Grid>
                <Grid item xs={12} md={6}>
                  <div className='text-box-style'><BasicTextField label="Street Address" id="address" className='w-100 custom-textfield' validate={validateRequired}/></div>
                  <div className='text-box-style'><BasicTextField label="Town/ City" id="townCity" className='w-100 custom-textfield' validate={validateRequired}/></div>
                  <div className='text-box-style'><BasicTextField label="Country (optional)" id="countryOptional" className='w-100 custom-textfield' /></div>
                </Grid>
                <Grid item xs={12} md={6}>
                  <div className='text-box-style'><BasicTextField label="Locality (Optional)" id="local" className='w-100 custom-textfield' /></div>
                  <div className='text-box-style'><BasicTextField label="Postal Code" id="postCode" className='w-100 custom-textfield' validate={validateRequired}/></div>
                  <div className='text-box-style'><BasicTextField label="Country" id="country" className='w-100 custom-textfield' validate={validateRequired}/></div>
                </Grid>
              </Grid>
            </CustomAccordion>
          </Box>
        );
      case 3:
        return (
          <Box>
            <CustomLabel text={"Almost Done"} type={'large'} />
            <CustomLabel text={"Please upload relevant agency documents"} type={'normal'} />
            <Grid container spacing={2}>
              <Grid item xs={12} md={4}>
                <div className='text-box-style'><BasicTextField label="Name" id="name" style={{ width: '100%' }} validate={validateRequired}/></div>
              </Grid>
              <Grid item xs={12} md={4}>
                <div className='text-box-style'><BasicTextField label="Type" id="type" style={{ width: '100%' }} validate={validateRequired}/></div>
              </Grid>
              <Grid item xs={12} md={4}>
                <div className='file-upload-style'>
                  <FileUploadComponent />
                </div>
              </Grid>
            </Grid>
          </Box>
        );
      case 4:
        return (
          <Box>
            <Agreement
              onAccept={onAgreementAccept}
              content={"Please read and accept the terms and conditions to proceed."}
            />
            {agreementAccepted && (
              <Button variant="contained" color="primary">
                Continue
              </Button>
            )}
          </Box>
        );
      default:
        return (
          <Box>
            <Grid container spacing={2} alignItems="center" justifyContent="center">
              <Grid item xs={12} md={6} className='image-grid'>
                <img src={allSetImg} className='image-allset-style' />
              </Grid>
              <Grid item xs={12} md={6}>
                <CustomLabel text={"You are all set!"} type={'allSet'}> </CustomLabel>
              </Grid>
            </Grid>
          </Box>
        );

    }
  };

  return (
    <Box className="stepper-Box">
      <Box className="logoContainer">
        <img src={xbsCareLogo} alt="Logo" className="logoImage" />
      </Box>

      <CustomContainer>
        <CustomCard
          // title={"Welcome to XBS Care!"}
          content={
            <StepperComponent getStepContent={getStepContent} isAuthorized={isAuthorized}/>
          }
        />

      </CustomContainer>
    </Box>
  );
}

export default RegistrationForm;