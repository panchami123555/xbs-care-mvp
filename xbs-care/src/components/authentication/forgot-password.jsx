import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/xbs-styles/styles.css';
import BasicButton from "../xbs-buttons/basic-button";
import { BasicTextField } from '../xbs-input-fields/basic-text-field';
import CustomLabel from "../xbs-input-fields/label";


export default function ForgotPassword() {
    const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');  
  const handleButtonClick = () => {
  };
  const handleBackClick = () => {

    navigate('/');
  };
  return (
    <Container component="main" maxWidth="lg" >
      <Box
        className="d-flex align-items-center justify-content-center vh-100"
      >
        <Grid container>
          <CssBaseline />
          <Grid
            item
            xs={false}
            sm={4}
            md={7}
            className=" img-fluid home-logo"
          >
            
          </Grid>
          <Grid
            item
            xs={12}
            sm={8}
            md={5}
            component={Paper}
            elevation={6}
            square
          >
            <Box
              sx={{
                my: 8,
                mx: 4,
              }}
              className="flex-column d-flex "
            >
               

              <CustomLabel  type='headingMain' text="Forgot Password"></CustomLabel>

             
                    <CustomLabel variant="subtitle2" sx={{mt:1}} text=" Enter the email you used to create your account to reset password"></CustomLabel>

              <Box
                component="form"
                noValidate
                sx={{ mt: 1 }}
              >
                <BasicTextField label="Email"  type='small'   fullwidth value={username} onChange={(e) => setUsername(e.target.value)} />
                <div className="mt-3 mb-3">
                <BasicButton type="submit" label="Send Request" className='rounded-button' onClick={handleButtonClick} />

                </div>
                <div className="mb-2 ">
                <BasicButton type="submit"  variant="outlined"  className='rounded-button' label="Back to Login" onClick={handleBackClick} />

                </div>
               
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} > 
        <p className="logo-label">
         Care Co-ordination made simpler
        </p>
      </Grid>
        </Grid>
      </Box>
    </Container>
  );
}