
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from './components/authentication/login';
import ForgotPassword from './components/authentication/forgot-password';


function App() {
  
  return (
    <div >
    
      
       <Router>
     <Routes>
   <Route path="/" element={<Login/>} /> 
   <Route path="/forgot" element={<ForgotPassword/>} /> 
   </Routes>
   </Router>


    </div>
    
  );
}

export default App;
