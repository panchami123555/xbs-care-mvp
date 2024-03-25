import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from './components/authentication/login';
import ForgotPassword from './components/authentication/forgot-password';
import ResetPassword from './components/authentication/reset-password';
import RegistrationForm from './components/registration/agencyRegistration';
import Dashboard from './components/dashboard/main.js';
import Test from './test';


function App() {
  
  return (
    <div >
    
      
       <Router>
     <Routes>
   <Route path="/" element={<Login/>} /> 
   <Route path="/forgot" element={<ForgotPassword/>} /> 
   <Route path="/reset" element={<ResetPassword/>} /> 
   <Route path="/register" element={<RegistrationForm/>} /> 
   <Route path="/test" element={<Test/>} /> 
   <Route path="/dashboard" element={<Dashboard/>} /> 
   </Routes>
   </Router>


    </div>
    
  );
}

export default App;
