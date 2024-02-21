import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Link } from 'react-router-dom';
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
import imageLogo from '../../components/assets/images/carelogo.svg';
import InputAdornment from '@mui/material/InputAdornment';
import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useNavigate } from 'react-router-dom';
import '../assets/css/image.css'
import { BasicTextField } from '../input-fields/basic-text-field';
import BasicButton from "../buttons/basic-button";
import { PasswordField } from "../input-fields/password-text-field.jsx";
import BackButton from "../buttons/back-button.jsx";
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
            className=" img-fluid gridContainer"
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
                Welcome!
              </Typography>
              <Box
                component="form"
                noValidate
                sx={{ mt: 1 }}
              >
                <BasicTextField label="Username"  
                validate={true}  size='small' value={username} onChange={(e) => setUsername(e.target.value)} />
                <PasswordField label="Password" size='small' value={password} onChange={(e) => setPassword(e.target.value)} />
                <div className="mt-3 mb-3">

                <BasicButton type="submit" label="Sign In" onClick={handleButtonClick}  />

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
        </Grid>
      </Box>
    </Container>
  );
}