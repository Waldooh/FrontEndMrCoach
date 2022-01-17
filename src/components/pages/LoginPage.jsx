import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { Formik, Form, ErrorMessage } from 'formik';
// import LogoTest from '../../img/MrBeast-Logo.png';
import '../styles/Login.css';

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const history = useHistory();
  // useEffect(() => {
  //   if(localStorage.getItem("user-info")) {
  //     history.push("/home")
  //   }
  // }, []);

  const handleLogin = async () => {
    console.warn("Enviado", email, password);
    let item = { email, password };
    let result = await fetch("http://localhost:8000/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(item)
    });
    result = await result.json()
    localStorage.setItem("user-info", JSON.stringify(result))
    // history.push("/home");
  };

  return (
    <Container className="login-container">
      <Row className="login-box my-5 rounded">
        <Col xm={"d-none"} md={5} lg={6} xl={6} className="bg-login-pic rounded-left">
        
        </Col>
        <Col className="p-5">
          <h2 className="fw-bold text-center py-5">Welcome Mr.</h2>
          <Formik
            initialValues={{
              email: "",
            }}
            validate={(values) => {
              let mistakes = {};
              
              //Validación de correo
              if(!values.email){
                mistakes.email = "Please enter your email"
              } else if(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.email)){
                mistakes.email = "Format email isn't correct"
              }
              return mistakes;
            }}
          >
            {({errors, props}) => (
            <Form>
              <div className="mb-4">
                <label for="email" className="form-label">Email:</label>
                <input 
                  type="email" 
                  className="form-control" 
                  name="email" 
                  placeholder="mr@example.com" 
                  onChange={(e) => setEmail(e.target.value)}
                />
                <ErrorMessage name="email" component={() => (
                  <small><div className="error text-danger">{errors.email}</div></small>
                )} 
                /> 
              </div>
              <div className="mb-2">
                <label for="password" className="form-label">Password:</label>
                <input 
                  type="password" 
                  className="form-control" 
                  name="password" 
                  placeholder="enter your password" 
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="d-flex justify-content-between mb-5 form-check">
                <input type="checkbox" name="connected" className="form-check-input" />
                <label for="connected" className="form-check-label">Remember me</label>
                <span className="forgot-pass"><a href="*"><i><small>Forgot password?</small></i></a></span>
              </div>
              <div>
                <button type="submit" className="btn btn-primary btn-block" onClick={handleLogin}>Login</button>
              </div>
              <div className="mt-1">
                <small>Didn't have an account? <a href="/signup">Register</a></small>
              </div>
            </Form>
            )}
          </Formik>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
