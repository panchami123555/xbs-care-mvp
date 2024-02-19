
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from './components/authentication/login';
import ForgotPassword from './components/authentication/forgot-password';
import RegistrationForm from './components/registration/agencyRegistration';


function App() {
  
  return (
    <div >
    
      
       <Router>
     <Routes>
   <Route path="/" element={<Login/>} /> 
   <Route path="/forgot" element={<ForgotPassword/>} /> 
   <Route path="/register" element={<RegistrationForm/>} /> 
   </Routes>
   </Router>


    </div>
    
  );
}

export default App;
