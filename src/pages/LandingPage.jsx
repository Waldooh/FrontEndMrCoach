import React from 'react';
import '../styles/Landing.module.css';
import MrLogo from '../components/img/MrCoach-Logo.png';

const LandingPage = () => {
  return (
    <div className="main-body">
      <header>
        <div className="main-container">
          <div className="navbar">
            <a href="/landing">
              <img className="logo-mrcoach" src={MrLogo} alt="Logo" />
            </a>
            <ul>
              <li><a href="/landing" className="nav-link active">Home</a></li>
              <li><a href="/landing" className="nav-link">About</a></li>
              <li><a href="/landing" className="nav-link">Contact</a></li>
              <li><a href="/landing" className="nav-link">Blog</a></li>
            </ul>
            <div className="hamburger">
              <span></span>
              <span></span>
              <span></span>
            </div>

          </div>
        </div>
      </header>
    </div>
  )
};

export default LandingPage;
