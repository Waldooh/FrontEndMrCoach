import React from 'react';
import '../styles/Landing.scss';
import MrLogo from '../components/img/MrCoach-Logo.png';
// import Image from '../components/img/coach.png';

const LandingPage = () => {
  return (
    <div className="landing-body">
      <header>
        <div className="landing-container">
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
      <div className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <h3>Build your ideal self with ideal coach</h3>
            <h2>Lorem ipsum dolor</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque cumque architecto 
              libero, adipisci maiores, sunt, nam deserunt necessitatibus modi magnam a fugiat unde! 
              Aspernatur voluptas architecto, culpa modi assumenda repellat?
            </p>
            <a href="/landing" className="learnmore-btn">Learn More</a>
          </div>
        </div>
        {/* <img src={Image} alt="" className="hero-image" /> */}
      </div>

    </div>
  )
};

export default LandingPage;
