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
export default function ResetPassword() {
    const navigate = useNavigate();
  const [tempPass,setTemppass] = useState('');
  const [newPass,setNewppass] = useState('');
  const [confirmPass,setCOnfirmpass] = useState('');

  
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
                Reset Password
              </Typography>
              <Typography variant="subtitle2" gutterBottom>
        Choose a new password for your account
      </Typography>
              <Box
                component="form"
                noValidate
                sx={{ mt: 1 }}
              >
                <PasswordField label="Temporary Password" size='small' value={tempPass} onChange={(e) => setTemppass(e.target.value)} />
                <div className="mt-n1">
                <PasswordField label="New Password" size='small' value={newPass} onChange={(e) => setNewppass(e.target.value)} />

                </div>
                <PasswordField label="Confirm Password" size='small' value={confirmPass} onChange={(e) => setCOnfirmpass(e.target.value)} />

                <div className="mt-3 mb-3">

                <BasicButton type="submit" label="Reset" onClick={handleButtonClick}  />
                </div>
                <div className="mt-2 mb-2">
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