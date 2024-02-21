import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/xbs-styles/styles.css';
import BasicButton from "../buttons/basic-button";
import { BasicTextField } from '../input-fields/basic-text-field';


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
               <Typography component="h4" variant="h4">
                Forgot Password
              </Typography>
              <Typography variant="subtitle2" gutterBottom sx={{mt:1}}>
       Enter the email you used to create your account to reset password
      </Typography>
              <Box
                component="form"
                noValidate
                sx={{ mt: 1 }}
              >
                <BasicTextField label="Email" size='small' value={username} onChange={(e) => setUsername(e.target.value)} />
                <div className="mt-3 mb-3">
                <BasicButton type="submit" label="Send Request" onClick={handleButtonClick} />

                </div>
                <div className="mb-2 ">
                <BasicButton type="submit"  variant="outlined"  label="Back to Login" onClick={handleBackClick} />

                </div>
               
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}