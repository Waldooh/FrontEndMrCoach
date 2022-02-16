import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import routes from '../../Routers/Helpers';

const NavigateCoach = () => {
    
  return (
    <Col className="navigation">
      <Row className="main-menu">

        <Link to={routes.routines} className="menu-item" activeclassname="selected" exact={true}>
          <div className="menu-icon">
            <span className="material-icons-outlined">pending_actions</span>
          </div>
          <span>Routines</span>
        </Link>

        <Link to={routes.exercises} className="menu-item" activeclassname="selected">
          <div className="menu-icon">
            <span className="material-icons-outlined">fitness_center</span>
          </div>
          <span>Exercises</span>
        </Link>
        
        <Link to={routes.pupils} className="menu-item" activeclassname="selected">
          <div className="menu-icon">
            <span className="material-icons-outlined">group</span>
          </div>
          <span>Pupils</span>
        </Link>

        <Link to={routes.blog} className="menu-item" activeclassname="selected">
          <div className="menu-icon">
            <span className="material-icons-outlined">article</span>  
          </div>
          <span>Blog</span>
        </Link>

        <Link to={routes.chat} className="menu-item" activeclassname="selected">
          <div className="menu-icon">
            <span className="material-icons-outlined">forum</span>
          </div>
          <span>Chat</span>
        </Link>
        
      </Row>
    </Col>
  );
};

export default NavigateCoach;
