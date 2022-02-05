import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import '../styles/SideMenu.scss';
import logo from './img/mrCoach-simbol.png';
import yo from './img/Yo.jpg';



function SideMenu(props) {

  const [isactive, setIsactive] = useState(false);

  useEffect(() => {
    props.onCollapse(isactive)
  }, [isactive]);

  return (
    <div className={`side-menu ${isactive ? "isactive" : ""}`}>
      <div className="top-section">
        <div className="logo">
          {!isactive
            ? <img src={logo} alt='MrCoach' />
            : ""
          }
        </div>
        <div onClick={()=>{setIsactive(!isactive)}} className="toggle-menu-btn">
          {!isactive 
            ? <span class="material-icons-outlined">arrow_back_ios</span> 
            : <span class="material-icons-outlined">menu</span> 
          }
        </div>
      </div>
      <hr />
      <Col className="navigation">
        <Row className="main-menu">

          <NavLink to="/routines" className="menu-item" activeClassName="selected" exact={true}>
            <div className="menu-icon">
              <span className="material-icons-outlined">pending_actions</span>
            </div>
            <span>Routines</span>
          </NavLink>

          <NavLink to="/exercises" className="menu-item" activeClassName="selected">
            <div className="menu-icon">
              <span className="material-icons-outlined">fitness_center</span>
            </div>
            <span>Exercises</span>
          </NavLink>
          
          <NavLink to="/pupils" className="menu-item" activeClassName="selected">
            <div className="menu-icon">
              <span className="material-icons-outlined">group</span>
            </div>
            <span>Pupils</span>
          </NavLink>

          <NavLink to="/blog" className="menu-item" activeClassName="selected">
            <div className="menu-icon">
              <span className="material-icons-outlined">article</span>  
            </div>
            <span>Blog</span>
          </NavLink>

          <NavLink to="/chat" className="menu-item" activeClassName="selected">
            <div className="menu-icon">
              <span className="material-icons-outlined">forum</span>
            </div>
            <span>Chat</span>
          </NavLink>
          
        </Row>
      </Col>
      <div className="footer-menu">
        <div className="avatar">
          <img src={yo} alt="user badge" />
        </div>
        <div className="user-info">
          <h5>Armando Ríos</h5>
          <p>armandorg95@hotmail.com</p>
        </div>
      </div>  
    </div>
  );
}

export default SideMenu;
