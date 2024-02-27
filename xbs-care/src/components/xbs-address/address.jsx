import { React, useState, useEffect, useRef  } from 'react';
import { Box, Grid } from '@mui/material';
import CustomLabel from '../xbs-input-fields/label';
import { BasicTextField } from '../xbs-input-fields/basic-text-field';
import CustomSwitch from '../xbs-switch/switch';

function AddressDetails() {
    const [isTradingAddressSame, setIsTradingAddressSame] = useState(false);
    const tradingAddressRef = useRef(null);
    const handleToggleChange = (event) => {
      setIsTradingAddressSame(event.target.checked);
    };
    useEffect(() => {
      if (isTradingAddressSame && tradingAddressRef.current) {
        tradingAddressRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, [isTradingAddressSame]); 
  return (
    <Box>
    <CustomLabel text={"Tell us more about yourself.."} type={'large'}> </CustomLabel>
    <CustomLabel text={"Registered office Address"} type={'medium'}> </CustomLabel>
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <div className='text-box-style'><BasicTextField label="Street Address" id="streetAddress" className='w-90 custom-textfield' /></div>
        <div className='text-box-style'><BasicTextField label="Town/City" id="townCity" className='w-90 custom-textfield' /></div>
        <div className='text-box-style'><BasicTextField label="Country(Optional)" id="country" className='w-90 custom-textfield' /></div>
      </Grid>
      <Grid item xs={12} md={6}>
        <div className='text-box-style'><BasicTextField label="Locality(Optional)" id="locality" className='w-90 custom-textfield' /></div>
        <div className='text-box-style'><BasicTextField label="Postal Code" id="postalCode" className='w-90 custom-textfield' /></div>
        <div className='text-box-style'><BasicTextField label="Country" id="country2" className='w-90 custom-textfield' /></div>
      </Grid>
    </Grid>
    <Grid container spacing={2} paddingTop={'3%'}>
      <Grid item xs={6} md={2}>
        <CustomLabel text={"Trading Address"} type={'mediumTrad'}/>
      </Grid>
      <Grid item xs={4} md={6}>
        <CustomSwitch
          label="Is trading address same as above?"
          checked={isTradingAddressSame}
          onChange={handleToggleChange}
        />
      </Grid>
    </Grid>

    <div ref={isTradingAddressSame ? tradingAddressRef : null}>
    {isTradingAddressSame && (
      <>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <div className='text-box-style'><BasicTextField label="Street Address" id="streetAddress" className='w-90 custom-textfield' /></div>
            <div className='text-box-style'><BasicTextField label="Town/City" id="townCity" className='w-90 custom-textfield' /></div>
            <div className='text-box-style'><BasicTextField label="Country(Optional)" id="country" className='w-90 custom-textfield' /></div>
          </Grid>
          <Grid item xs={12} md={6}>
            <div className='text-box-style'><BasicTextField label="Locality(Optional)" id="locality" className='w-90 custom-textfield' /></div>
            <div className='text-box-style'><BasicTextField label="Postal Code" id="postalCode" className='w-90 custom-textfield' /></div>
            <div className='text-box-style'><BasicTextField label="Country" id="country2" className='w-90 custom-textfield' /></div>
          </Grid>
        </Grid>
      </>
    )}
    </div>
  </Box>
  )
}

export default AddressDetails