import React, { useState } from 'react';
import { Navbar, Nav, Container, Col, Row } from 'react-bootstrap';
import Popup from '../components/Popup';
import AccountSelector from '../components/ModalContent/AccountSelector';
import '../styles/Landing.scss';
import MrLogo from '../components/img/mrCoach-simbol.png';

const LandingPage = () => {

  const [clickRegister, setClickRegister] = useState(false);

  return (
    <>
      <Navbar className="navbar" variant="dark">
        <Container>
          <Navbar.Brand className="logo-section" href="/landing">
            <img className="mr-2" style={{width:"30px"}} src={MrLogo} alt="logo" />
            MR. COACH
          </Navbar.Brand>
          <Nav>
            <Nav.Link className="d-flex align-items-center" href="/login">
              <span class="material-icons-outlined mr-2">login</span> Login
            </Nav.Link>
            <Nav.Link 
              className="ml-5" 
              onClick={()=>setClickRegister(true)}
            >Register
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Popup trigger={clickRegister} setTrigger={setClickRegister}>
        <AccountSelector />
      </Popup>

      <div className="hero-section">
        <div className="hero-content">
          <h3>It never get easier you get  ¡stronger!</h3>
          <h2>Build your ideal self with your ideal coach</h2>
          <p>
            Find your personal trainer who want's you to achive your goals. A coach for you
            to leade you, to motivate you, to push you until you get it! 
          </p>
          <Nav.Link   
            className="joinow-btn" 
            trigger={clickRegister} setTrigger={setClickRegister}
            onClick={()=>setClickRegister(true)}
          >Join Now
          </Nav.Link>
          <Nav.Link  href="/landing" className="learnmore-btn">Learn More</Nav.Link>
        </div>
      </div>
{/* ---------------------- Second section ------------------------- */}
      <div className="middle-section">
        <Col></Col>
        <Col className="middle-content">
          <h2>Stay focused positive and ¡Don't give up!</h2>
          <p>
            Slow progress is better than no progress. With our application you can track your goals and see it growth. Post it, share it or renew it.
          </p>
        </Col>
      </div>
{/* -------------------- Benefits ------------------------- */}
      <div className="benefit-section">
        <Row>
          <Col className="benefit-item d-flex">
            <span class="material-icons-outlined">task_alt</span>
            <div className="mx-2">
              <h3>Set your goals & track your progress</h3>
              <p>Take evidence with pictures of yourself and compare each other along your training to see your progress.</p>
            </div>
          </Col>
          <Col className="benefit-item d-flex">
            <span class="material-icons-outlined">task_alt</span>
            <div className="mx-2">
              <h3>Get motivated with no excuses</h3>
              <p>Find & hire your ideal personal coach and receive all the benefits. He or she won't let you get down.</p>
            </div>
          </Col>
          <Col className="benefit-item d-flex">
            <span class="material-icons-outlined">task_alt</span>
            <div className="mx-2">
              <h3>Made you own program at you own fit</h3>
              <p>Set your own cualities and start building a better self using all our tools.</p>
            </div>
          </Col>
        </Row>
      </div>
{/* ------------------------ Footer ---------------------------- */}
      <div className="footer-section text-light pt-2 pb-4">
        <Container className="text-center text-md-left">
          <Row className="text-center text-md-left">
          <hr className="mb-2" />
            <Col md={3} lg={3} xl={3} className="footer-about mx-auto mt-2">
              <h5 className="text-uppercase mb-3 text-info">About Us</h5>
              <hr className="mb-3" />
              <p>Lorem ipsum dolor, Est tempore itaque delectus aut nesciunt iusto laudantium, nulla sed ex quod et veritatis.</p>
            </Col>
            <Col md={4} lg={3} xl={3} className="footer-contact mx-auto mt-2">
              <h5 className="text-uppercase mb-3 text-info">Contact</h5>
              <hr className="mb-3" />
              <p><span class="material-icons-outlined">email</span> mrcoach@hotmail.com</p>
              <p><span class="material-icons-outlined">smartphone</span> +12 3465789</p>
              <p><span class="material-icons-outlined">fax</span> +012 3465798</p>
            </Col>
            <hr className="mb-3" />
            <Row className="d-flex justify-content-center">
              <div>
                <p>
                  Copyright © 2021 All Rights Reserved By:
                  <a href="*" style={{textDecoration:"none"}}>
                    <strong> Mr. Coach</strong>
                  </a>
                </p>
              </div>
            </Row>
            {/* <Row className="d-flex justify-content-center">
              <div className="text-center">
                <ul className="list-unstyled list-inline">
                  <li className="list-inline-item">
                    <a href="www.kodemia.mx" className="text-info"><i class="fab fa-facebook"></i></a>
                  </li>
                </ul>

              </div>
            </Row> */}
          </Row>
        </Container>

      </div>
    </>
  )
};

export default LandingPage;
