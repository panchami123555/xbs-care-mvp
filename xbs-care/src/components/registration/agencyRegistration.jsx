// Import necessary components and styles
import { React, useState } from 'react';
import { Box, Grid } from '@mui/material';
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
import agencyImage from '../assets/images/agency.png'

function RegistrationForm() {
  const [isTradingAddressSame, setIsTradingAddressSame] = useState(false);

  const handleToggleChange = (event) => {
    setIsTradingAddressSame(event.target.checked);
  };
  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Box>
                <CustomLabel text={"Let’s set you up!"} type={'large'}> </CustomLabel>
                <div className='text-box-style'><BasicTextField label="Name of Agency" id="nameOfAgency" className='text-box-style' style={{ width: '120%' }} /></div>
                <div className='text-box-style'><BasicTextField label="Contact Number" id="contactNumber" className='text-box-style' style={'width:90%'} /></div>
                <div className='text-box-style'><BasicTextField label="Alternate contact Number" id="alternateContactNumber" className='text-box-style' style={'width:90%'} /></div>
                <div className='text-box-style'><BasicTextField label="Email" id="email" className='text-box-style' style={'width:90%'} /></div>
              </Box>
            </Grid>
            <Grid item xs={12} md={6} className='image-grid'>
              <img src={agencyImage} className='image-style' />
            </Grid>
          </Grid>
        );

      case 1:
        return (
          <Box>
            <CustomLabel text={"Tell us more about yourself.."} type={'large'}> </CustomLabel>
            <CustomLabel text={"Registered office Address"} type={'medium'}> </CustomLabel>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <div className='text-box-style'><BasicTextField label="Street Address" id="streetAddress" style={{ width: '90%' }} /></div>
                <div className='text-box-style'><BasicTextField label="Town/City" id="townCity" style={{ width: '90%' }} /></div>
                <div className='text-box-style'><BasicTextField label="Country(Optional)" id="country" style={{ width: '90%' }} /></div>
              </Grid>
              <Grid item xs={12} md={6}>
                <div className='text-box-style'><BasicTextField label="Locality(Optional)" id="locality" style={{ width: '90%' }} /></div>
                <div className='text-box-style'><BasicTextField label="Postal Code" id="postalCode" style={{ width: '90%' }} /></div>
                <div className='text-box-style'><BasicTextField label="Country" id="country2" style={{ width: '90%' }} /></div>
              </Grid>
            </Grid>
            <Grid container spacing={2} paddingTop={'3%'}>
              <Grid item xs={6} md={2}>
                <CustomLabel text={"Trading Address"} type={'medium'}/>
              </Grid>
              <Grid item xs={4} md={6}>
                <CustomSwitch
                  label="Is trading address same as above?"
                  checked={isTradingAddressSame}
                  onChange={handleToggleChange}
                />
              </Grid>
            </Grid>


            {isTradingAddressSame && (
              <>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <div className='text-box-style'><BasicTextField label="Street Address" id="streetAddress" style={{ width: '90%' }} /></div>
                    <div className='text-box-style'><BasicTextField label="Town/City" id="townCity" style={{ width: '90%' }} /></div>
                    <div className='text-box-style'><BasicTextField label="Country(Optional)" id="country" style={{ width: '90%' }} /></div>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <div className='text-box-style'><BasicTextField label="Locality(Optional)" id="locality" style={{ width: '90%' }} /></div>
                    <div className='text-box-style'><BasicTextField label="Postal Code" id="postalCode" style={{ width: '90%' }} /></div>
                    <div className='text-box-style'><BasicTextField label="Country" id="country2" style={{ width: '90%' }} /></div>
                  </Grid>
                </Grid>
              </>
            )}
          </Box>
        );
      case 2:
        return (
          <Box>
            <CustomLabel text={"Tell us more about yourself.."} type={'large'}> </CustomLabel>
            <CustomAccordion summary="Account Details" defaultExpanded={true}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <div className='text-box-style'><BasicTextField label="Date of Incoperation" id="dateIncoperation" style={{ width: '90%' }} /></div>
                  <div className='text-box-style'><BasicTextField label="Company Website" id="compWebsite" style={{ width: '90%' }} /></div>
                  <div className='text-box-style'><BasicTextField label="Company Registration Number" id="compRegNumber" style={{ width: '90%' }} /></div>
                  <div className='text-box-style'><BasicTextField label="Unique Taxpayer Reference (UTR)" id="uniqueTaxRef" style={{ width: '90%' }} /></div>
                  <div className='text-box-style'><BasicTextField label="Number of Resources" id="nResources" style={{ width: '90%' }} /></div>
                  <div className='text-box-style'><BasicTextField label="Number of Clients" id="nClients" style={{ width: '90%' }} /></div>
                </Grid>
                <Grid item xs={12} md={6} className='image-grid'>
                  <img src={agencyImage} className='image-style' />
                </Grid>
              </Grid>
            </CustomAccordion>
            <CustomAccordion summary="Leadership Details" defaultExpanded={true}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <div className='text-box-style'><BasicTextField label="Role" id="role" style={{ width: '100%' }} /></div>
                  <div className='text-box-style'><BasicTextField label="Email" id="email" style={{ width: '100%' }} /></div>
                </Grid>
                <Grid item xs={12} md={6}>
                  <div className='text-box-style'><BasicTextField label="Name" id="name" style={{ width: '100%' }} /></div>
                  <div className='text-box-style'><BasicTextField label="Phone" id="phone" style={{ width: '100%' }} /></div>
                </Grid>
                <Grid item xs={12}>
                  <CustomLabel text={"Address (Optional)"} style={{ width: '100%' }} type={'normal'} />
                </Grid>
                <Grid item xs={12} md={6}>
                  <div className='text-box-style'><BasicTextField label="Street Address" id="address" style={{ width: '100%' }} /></div>
                  <div className='text-box-style'><BasicTextField label="Town/ City" id="townCity" style={{ width: '100%' }} /></div>
                  <div className='text-box-style'><BasicTextField label="Country (optional)" id="countryOptional" style={{ width: '100%' }} /></div>
                </Grid>
                <Grid item xs={12} md={6}>
                  <div className='text-box-style'><BasicTextField label="Locality (Optional)" id="local" style={{ width: '100%' }} /></div>
                  <div className='text-box-style'><BasicTextField label="Postal Code" id="postCode" style={{ width: '100%' }} /></div>
                  <div className='text-box-style'><BasicTextField label="Country" id="country" style={{ width: '100%' }} /></div>
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
              <Grid item xs={12} md={6}>
                <div className='text-box-style'><BasicTextField label="Name" id="name" style={{ width: '100%' }} /></div>
              </Grid>
              <Grid item xs={12} md={6}>
                <div className='text-box-style'><BasicTextField label="Type" id="type" style={{ width: '100%' }} /></div>
              </Grid>
            </Grid>
          </Box>

        );
      default:
        return 'Unknown Step';
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
            <StepperComponent getStepContent={getStepContent} />
          }
        />

      </CustomContainer>
    </Box>
  );
}

export default RegistrationForm;