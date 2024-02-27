import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/xbs-styles/styles.css';
import BasicButton from "../xbs-buttons/basic-button";
import { BasicTextField } from '../xbs-input-fields/basic-text-field';
import CustomLabel from "../xbs-input-fields/label.jsx";
import { PasswordField } from "../xbs-input-fields/password-text-field.jsx";
export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isFormSubmitted, setFormSubmitted] = useState(false);
  const [usernameError, setUsernameError] = useState(false);
  const handleButtonClick = () => {

    setFormSubmitted(true);
  };
  const handleUsernameChange = (e) => {
    const inputValue = e.target.value;
    
    // Validate if the username is not empty
    const isValid = inputValue.trim() !== '';

    setUsername(inputValue);
    setUsernameError(!isValid);
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
             
              <CustomLabel   text="Welcome!" type='headingMain'></CustomLabel>
              <Box
                component="form"
                noValidate
                sx={{ mt: 1 }}
              >
                <BasicTextField label="Username"  
                validate={true}  type='small' value={username}  fullwidth onChange={(e) => setUsername(e.target.value)} />
                <PasswordField label="Password"  type='small'   fullwidth value={password} onChange={(e) => setPassword(e.target.value)} />
                <div className="mt-3 mb-3">

                <BasicButton type="submit" label="Sign In" onClick={handleButtonClick} className='rounded-button'  />

                </div>
                
                <Grid container>
                  <Grid item xs>
                    <Link to="/forgot" variant="body2">
                      Forgot password?
                    </Link>
                  </Grid>
                </Grid>

            
             
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