import React from 'react'
import { Container, Col, Row, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import loginIcon from "../../img/userColor.png";
import secureLogin from "../../img/SecureLogin.svg";
import "../styles/Login.css";

const Login = () => {
  return (
    <>
      <Container className="mt-5">
        <Row>
          <Col lg={4} md={6} sm={12} className="shadow-lg rounded text-center mt-5 p-5">
            <img className="userIcon-img" src={loginIcon} alt="icon" />
            <Form className="shadow-sm mt-5">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Button variant="primary btn-block" type="submit">Login</Button>
              <div className="text-right mt-3">
                <a href="www.kodemia.mx"><small className="reset">Password Reset</small></a> II 
                <a href="www.kodemia.mx"><small className="reset ml-2"> Quick Recover</small></a>
              </div>
            </Form>
          </Col>

          <Col lg={8} md={6} sm={12}>
            <img className="launch-img mt-5" src={secureLogin} alt="" />
          </Col>

        </Row>
      </Container>
    </>
    );
  };
  




  export default Login
  






  // <div className='first-container'>
  //   <div className='second-container'>
  //     <div className='from-group'>
  //       <laber>Usuario: </laber>
  //       <br />
  //       <input type={'text'} className='form-control' />
  //       <br />
  //       <laber>Contraseña: </laber>
  //       <br />
  //       <input type={'password'} className='form-control' />
  //       <br />
  //       <button className='btn btn-primary'>Iniciar Sesión</button>
  //     </div>
  //   </div>
  // </div>