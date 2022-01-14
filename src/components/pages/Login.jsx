import { React } from 'react'
import * as yup from 'yup';
import { Container, Col, Row, Form, Button } from 'react-bootstrap';
import { Formik } from 'formik';
import 'bootstrap/dist/css/bootstrap.min.css';
// import loginIcon from "../../img/userColor.png";
import secureLogin from "../../img/SecureLogin.svg";
import "../styles/Login.css";

const Login = () => {

  const SignupSchema = yup.object().shape({
    lastName: yup.string().required(),
    firstName: yup.string().required(),
    email: yup.string().email('Invalid email').required(),
    terms: yup.bool().required().oneOf([true], "term must be accepted"),
  });

  return (
    <>
      <Container className="mt-5">
        <Row>
          <Col lg={4} md={6} sm={12} className="shadow-lg rounded text-center mt-5 p-5">
          
          <span className="material-icons-outlined userIcon">
          account_circle
          </span>
            {/* <img className="userIcon-img" src={loginIcon} alt="icon" /> */}
            <hr />
            <Formik
              validationSchema={SignupSchema}
              onSubmit={console.log()}
              initialValues={{
                email: "",
                terms: false,
              }}
            >
              {({handleSubmit, handleChange, values, touched, errors}) => (
              <Form 
                noValidate 
                onSubmit={handleSubmit} 
                className="formulario mt-5"
              >
                <Form.Group className="mb-3" controlId="validationEmail">
                  <Form.Control 
                    type="email" 
                    name="email"
                    placeholder="Email@example.com"
                    value={values.email}
                    onChange={handleChange}
                    isInvalid={!!errors.email}
                    isValid={touched.email && !errors.email}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.email}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                
                <Form.Group>
                  <Form.Check
                    required
                    name="terms"
                    label="Agree to terms and conditions"
                    onChange={handleChange}
                    isInvalid={!!errors.terms}
                    feedback={errors.terms}
                    id="validationFormik0"
                  />
                </Form.Group>

                <Button variant="primary btn-block" type="submit">Login</Button>

                <hr />
                <div className="text-right mt-3">
                  <small>Are you new here?</small>
                  <a href="/signup"><small className="reset"> Register now</small></a>
                </div>
              </Form>
              )}
            </Formik>
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