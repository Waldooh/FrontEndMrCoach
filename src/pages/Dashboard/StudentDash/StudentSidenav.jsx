import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
// import '../../../styles/SideNav.scss'

export const StudentSidenav = () => {

// user <Link></Link> elemento for <li></li>
  return (
    <Container className="body-nav">
      <Col className="navigation">
      Aside navbar student 🎙 
        <Row className="nav-menu">

        <NavLink to="" className="title" activeClassName="selected" exact={true}>
          <span className="material-icons-outlined">pending_actions</span>
          <h6>Routines</h6>
        </NavLink>

        <NavLink to="" className="title" activeClassName="selected">
          <span className="material-icons-outlined">fitness_center</span>
          Exercises
        </NavLink>
          
        <NavLink to="" className="title" activeClassName="selected">
          <span className="material-icons-outlined">group</span>
          Pupils
        </NavLink>

        <NavLink to="" className="title" activeClassName="selected">
          <span className="material-icons-outlined">article</span>  
          Blog
        </NavLink>

        <NavLink to="" className="title" activeClassName="selected">
          <span className="material-icons-outlined">forum</span>
          Chat
        </NavLink>

        </Row>
      </Col>
    </Container>
  );
};

export default StudentSidenav;