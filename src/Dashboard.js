// src/Dashboard.js
import React, { useState } from 'react';
import './Dashboard.css';
import AnimatedSVG from './AnimatedSVG'; 
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Dashboard = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div>
      <header id="header" className="header d-flex align-items-center fixed-top">
        <div className="container-fluid container-xl position-relative d-flex align-items-center">
          <div className="left-space"></div>
          <a href="index.html" className="logo d-flex align-items-center">
            <h4 className="sitename">DIJI-VOTE</h4>
          </a>
          <nav id="navmenu" className={`navmenu ${isNavOpen ? 'active' : ''}`}>
            <ul>
              
              <li><a href="#about">About</a></li>
              <li><a href="#services">Profile</a></li>
              <li><a href="#portfolio">Vote</a></li>
              <li><a href="#team">Help?</a></li>
            </ul>
            <i className="mobile-nav-toggle d-xl-none bi bi-list" onClick={handleNavToggle}></i>
          </nav>
        </div>
      </header>
      <main>
        <AnimatedSVG />
        <section className="image-gallery">
          <div className="image-card">
            <img src="/images/dashboard-img.jpg" alt="secure" />
            <p>Secured</p>
          </div>
          <div className="image-card">
            <img src="" alt="secure" />
            <p>Start in just a few steps</p>
          </div>
          <div className="image-card">
            <img src="" alt="secure" />
            <p>Create your own poll</p>
          </div>
          <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <Typography variant="h4" component="h1" gutterBottom>
              Welcome to My Material-UI App
            </Typography>
            <Button variant="contained" color="primary" href='Authentication.js'>
              Click Me
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
