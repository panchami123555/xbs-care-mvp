// Import necessary components and styles
import { React, useState } from 'react';
import { Box, Container, TextField, Button, Typography, Card, CardContent } from '@mui/material';
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

const labelStyle = {
  color: '#194A9F',
  fontSize: '20px',
  fontWeight: 600,
  lineHeight: 'normal',
  width: '100%',
  textAlign: 'left',
  marginBottom: '1rem',
  paddingTop: '3%',
}
const labelStyle2 = {
  color: '#194A9F',
  fontSize: '15px',
  fontWeight: 600,
  lineHeight: 'normal',
  width: '100%',
  textAlign: 'left',
  marginBottom: '1rem',
  paddingTop: '3%',
}
function RegistrationForm() {
  const [isTradingAddressSame, setIsTradingAddressSame] = useState(false);

  const handleToggleChange = (event) => {
    setIsTradingAddressSame(event.target.checked);
  };
  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <Box>
            <CustomLabel text={"Let’s set you up!"} style={labelStyle}> </CustomLabel>
            <div className='text-box-style'><BasicTextField label="Name of Agency" id="nameOfAgency" /></div>
            <div className='text-box-style'><BasicTextField label="Contact Number" id="contactNumber" /></div>
            <div className='text-box-style'><BasicTextField label="Alternate contact Number" id="alternateContactNumber" /></div>
            <div className='text-box-style'><BasicTextField label="Email" id="email" /></div>
          </Box>
        );
      case 1:
        return (
          <Box>
            <CustomLabel text={"Tell us more about yourself.."} style={labelStyle}> </CustomLabel>
            <CustomLabel text={"Registered office Address"} style={labelStyle2}> </CustomLabel>
            <div><BasicTextField label="Street Address" id="streetAddress" className='text-box-style' /></div>
            <div className='text-box-style'><BasicTextField label="Town/City" id="townCity" /></div>
            <div className='text-box-style'><BasicTextField label="Country(Optional)" id="country" /></div>
            <div className='text-box-style'><BasicTextField label="Locality(Optional)" id="locality" /></div>
            <div className='text-box-style'><BasicTextField label="Postal Code" id="postalCode" /></div>
            <div className='text-box-style'><BasicTextField label="Country" id="country2" /></div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
              <CustomLabel text={"Trading Address"} style={{ ...labelStyle, flex: 1 }} />
              <CustomSwitch
                label="Is trading address same as above?"
                checked={isTradingAddressSame}
                onChange={handleToggleChange}
                style={{ flex: 1 }}
              />
            </div>

            {isTradingAddressSame && (
              <>
                <div className='text-box-style'><BasicTextField label="Street Address" id="streetAddressTradding" /></div>
                <div className='text-box-style'><BasicTextField label="Town/City" id="townCityTradding" /></div>
                <div className='text-box-style'><BasicTextField label="Country(Optional)" id="countryTradding" /></div>
                <div className='text-box-style'><BasicTextField label="Locality(Optional)" id="localityTradding" /></div>
                <div className='text-box-style'><BasicTextField label="Postal Code" id="postalCodeTradding" /></div>
                <div className='text-box-style'><BasicTextField label="Country" id="countryTradding" /></div>
              </>
            )}
          </Box>
        );
      case 2:
        return (
          <Box>
            <CustomLabel text={"Tell us more about yourself.."} style={labelStyle}> </CustomLabel>
            <CustomAccordion summary="Account Details" defaultExpanded='true'>
              <div className='text-box-style'><BasicTextField label="Date of Incoperation" id="dateIncoperation" /></div>
              <div className='text-box-style'><BasicTextField label="Company Website" id="compWebsite" /></div>
              <div className='text-box-style'><BasicTextField label="Company Registration Number" id="compRegNumber" /></div>
              <div className='text-box-style'><BasicTextField label="Unique Taxpayer Reference (UTR)" id="uniqueTaxRef" /></div>
              <div className='text-box-style'><BasicTextField label="Number of Resources" id="nResources" /></div>
              <div className='text-box-style'><BasicTextField label="Number of Clients" id="nClients" /></div>
            </CustomAccordion>
            <CustomAccordion summary="Leadership Details" defaultExpanded='true'>
              <div className='text-box-style'><BasicTextField label="Role" id="role" /></div>
              <div className='text-box-style'><BasicTextField label="Name" id="name" /></div>
              <div className='text-box-style'><BasicTextField label="Email" id="email" /></div>
              <div className='text-box-style'><BasicTextField label="Phone" id="phone" /></div>
            </CustomAccordion>
            <CustomAccordion summary="Address (Optional)" defaultExpanded='true'>
              <div className='text-box-style'><BasicTextField label="Street Address" id="address" /></div>
              <div className='text-box-style'><BasicTextField label="Locality (Optional)" id="local" /></div>
              <div className='text-box-style'><BasicTextField label="Town/ City" id="townCity" /></div>
              <div className='text-box-style'><BasicTextField label="Postal Code" id="postCode" /></div>
              <div className='text-box-style'><BasicTextField label="County (optional)" id="countryOptional" /></div>
              <div className='text-box-style'><BasicTextField label="Country" id="country" /></div>
            </CustomAccordion>
          </Box>
        );
      case 3:
        return (
          <Box>
            <CustomLabel text={"Almost Done"} style={labelStyle}> </CustomLabel>
            <CustomLabel text={"Please upload relevent agency documents"} style={labelStyle2}> </CustomLabel>
            <div className='text-box-style'><BasicTextField label="Name" id="name" /></div>
            <div className='text-box-style'><BasicTextField label="Type" id="type" /></div>
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