import React from 'react';
import {
  Box,
  Container,
  TextField,
  Button,
  AppBar,
  Tabs,
  Tab,
  Card,
  CardContent,
  Typography,
  Grid
} from '@mui/material';
import homePageImage from '../assets/images/agency.png';
import xbsCareLogo from '../assets/images/carelogo.svg';
import HomeIcon from '@mui/icons-material/GroupOutlined';
import BusinessIcon from '@mui/icons-material/PlaceOutlined';
import GroupIcon from '@mui/icons-material/Person4Outlined';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFileOutlined'; 

function RegistrationForm() {
  return (
    <Box sx={{ height: '100vh', overflow: 'hidden' }}>
      <Container sx={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', position: 'absolute', top: '2%', left: '2%', padding: '20px' }}>
          <img src={xbsCareLogo} alt="Logo" style={{ height: '150px' }} />
        </Box>
        <Card sx={{ maxWidth: '90%', maxHeight: '90vh', borderRadius: '40px', background: '#FFF', boxShadow: '10px 10px 32px 2px #194A9F, 0px 4px 4px 0px rgba(0, 0, 0, 0.25)', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: '2rem' }}>
          <Typography sx={{ color: '#194A9F', fontSize: '30px', fontWeight: 600, lineHeight: 'normal', width: '100%', textAlign: 'left', marginBottom: '1rem' }}>
            Welcome to XBS Care!
          </Typography>
          <AppBar position="static" sx={{ backgroundColor: 'transparent', color: '#194A9F', boxShadow: 'none', borderBottom: '1px solid #e0e0e0', width: '100%' }}>
            <Tabs value={0} indicatorColor="primary" textColor="inherit" variant="fullWidth">
              <Tab icon={<HomeIcon />} label="Agency Details" />
              <Tab icon={<BusinessIcon />} label="Address Details" />
              <Tab icon={<GroupIcon />} label="Leadership Details" />
              <Tab icon={<InsertDriveFileIcon />} label="Documents" />
            </Tabs>
          </AppBar>
          <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1, width: '100%' }}>
            <Grid container spacing={2} sx={{ flexGrow: 1, width: '100%', height: '100%', marginTop: '1rem' }}>
              <Grid item xs={12} md={6}>
                <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <Typography sx={{ color: '#194A9F', fontSize: '20px', fontWeight: 600, lineHeight: 'normal', width: '100%', textAlign: 'left', marginBottom: '1rem' }}>
                    Let’s set you up!
                  </Typography>
                  <form noValidate autoComplete="off">
                    <TextField required id="name-of-agency" label="Name of Agency" fullWidth margin="normal" sx={{ borderRadius: '10px', border: '1px solid #194A9F',}} />
                    <TextField required id="contact-number" label="Contact Number" fullWidth margin="normal" sx={{ borderRadius: '10px', border: '1px solid #194A9F',}} />
                    <TextField id="alternate-contact-number" label="Alternate Contact Number" fullWidth margin="normal" sx={{ borderRadius: '10px', border: '1px solid #194A9F',}} />
                    <TextField required id="official-email-id" label="Official Email Id" fullWidth margin="normal" sx={{ borderRadius: '10px', border: '1px solid #194A9F',}} />
                  </form>
                </CardContent>
              </Grid>
              <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img src={homePageImage} alt="Description" style={{ maxWidth: '100%', height: '330px' }} />
              </Grid>
            </Grid>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', paddingTop: '1rem' }}>
              <Button variant="contained" sx={{ backgroundColor: '#123B94', '&:hover': { backgroundColor: '#0f2c6d' } }}>
                Next
              </Button>
            </Box>
          </Box>
        </Card>
      </Container>
    </Box>
  );
}

export default RegistrationForm;
