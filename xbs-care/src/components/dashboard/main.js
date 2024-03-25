import React from 'react';

import NavBar from './navBar.js';
import Header from './header.js';
import ContentArea from './dashboard.js';

const Dashboard = () => {
    return (
      <div className="dashboard" style={{ background: '#F3F8FE' }}>
        <div className="main-content">
        <NavBar /> 
          <Header />
          <ContentArea />
        </div>
      </div>
    );
  };
  

export default Dashboard;
