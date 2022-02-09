import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/SideMenu.scss';
import useAuth from './Auth/useAuth';
import logo from './img/mrCoach-simbol.png';
import yo from './img/Yo.jpg';
import routes from '../Routers/Helpers';



const SideMenu = (props) => {

  const { logOut } = useAuth();
  const [isactive, setIsactive] = useState(false);
  const [collapse, setCollapse] = useState(false)

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

          <Link to={routes.routines} className="menu-item" activeClassName="selected" exact={true}>
            <div className="menu-icon">
              <span className="material-icons-outlined">pending_actions</span>
            </div>
            <span>Routines</span>
          </Link>

          <Link to={routes.exercises} className="menu-item" activeClassName="selected">
            <div className="menu-icon">
              <span className="material-icons-outlined">fitness_center</span>
            </div>
            <span>Exercises</span>
          </Link>
          
          <Link to={routes.pupils} className="menu-item" activeClassName="selected">
            <div className="menu-icon">
              <span className="material-icons-outlined">group</span>
            </div>
            <span>Pupils</span>
          </Link>

          <Link to={routes.blog} className="menu-item" activeClassName="selected">
            <div className="menu-icon">
              <span className="material-icons-outlined">article</span>  
            </div>
            <span>Blog</span>
          </Link>

          <Link to={routes.chat} className="menu-item" activeClassName="selected">
            <div className="menu-icon">
              <span className="material-icons-outlined">forum</span>
            </div>
            <span>Chat</span>
          </Link>
          
        </Row>
      </Col>
      <div className="footer-menu">

        <div className="dropup">
          <button className="avatar" onClick={()=>setCollapse(!collapse)}>
            <img src={yo} alt="user badge" />
          </button>
          {collapse
            ? <ul className="drop-menu">
                <Link to={routes.profile} className="dropdown-item my-1">Profile</Link>
                <Link to="#" className="dropdown-item my-1">Settings</Link>
                <hr className="dropdown-divider m-0" />
                <Link to="#" className="dropdown-item my-1" onClick={logOut}>Sign out</Link>
              </ul>
            : ""
          }
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
