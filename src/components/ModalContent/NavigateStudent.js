import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import routes from '../../Routers/Helpers';

const NavigateStudent = () => {
    
  return (
    <Col className="navigation">
      <Row className="main-menu">

        <Link to={routes.explore} className="menu-item" activeclassname="selected" exact={true}>
          <div className="menu-icon">
            <span class="material-icons-outlined">explore</span>
          </div>
          <span>Explore</span>
        </Link>

        <Link to={routes.report} className="menu-item" activeclassname="selected" exact={true}>
          <div className="menu-icon">
            <span class="material-icons-outlined">flag</span>
          </div>
          <span>Report</span>
        </Link>

        <Link to={routes.calendar} className="menu-item" activeclassname="selected">
          <div className="menu-icon">
            <span class="material-icons-outlined">today</span>
          </div>
          <span>Calendar</span>
        </Link>
        
        <Link to={routes.gallery} className="menu-item" activeclassname="selected">
          <div className="menu-icon">
            <span class="material-icons-outlined">collections</span>          
          </div>
          <span>Gallery</span>
        </Link>
        
      </Row>
    </Col>
  );
};

export default NavigateStudent;