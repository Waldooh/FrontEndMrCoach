import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Formik, Form } from 'formik';
// import LogoTest from '../../img/MrBeast-Logo.png';
import '../styles/Login.css';

const Login = () => {
  return (
    <Container className="login-container">
      <Row className="login-box my-5 rounded">
        <Col xm={"d-none"} md={5} lg={6} xl={7} className="bg-pic rounded-start">
        
        </Col>
        <Col className="p-5">
          <h2 className="fw-bold text-center py-5">Welcome Mr.</h2>
          <Formik>
            <Form>
              <div className="mb-4">
                <label for="email" className="form-label">Your email:</label>
                <input type="email" className="form-control" name="email" />
              </div>
              <div className="mb-2">
                <label for="password" className="form-label">Password:</label>
                <input type="password" className="form-control" name="password" />
              </div>
              <div className="d-flex justify-content-between mb-4 form-check">
                <input type="checkbox" name="connected" className="form-check-input" />
                <label for="connected" className="form-check-label">Remember me</label>
                <span className="forgot-pass"><a href="#"><i><small>Forgot password?</small></i></a></span>
              </div>
              <div className="d-grid">
                <button type="submit" className="btn btn-primary">Login</button>
              </div>
              <div className="my-3">
                <small><span>Didn't have an account? <a href="/signup">Register</a></span></small>
              </div>
            </Form>
            

          </Formik>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
