import { Formik, Form } from 'formik';
import { React, useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import '../styles/Signup.css';

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};
const passVerification = {
  isLenthy: false,
  hasUpper: false,
  // hasLower: false,
  hasNumber: false,
  // hasSymbol: false,
  confirmPass: false,
};

const SignupPage = () => {

  const navigate = useNavigate();
  const [newUser, setNewUser] = useState(initialState);
  const [passwordError, setPasswordError] = useState(passVerification);

  useEffect(() => {}, [newUser]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setNewUser({ ...newUser, [name]: value });

    if(name === "password") {
      const isLenthy = value.length > 8;
      const hasUpper = /[A-Z]/.test(value);
      // const hasLower = /[a-z]/.test(value);
      const hasNumber = /[0-9]/.test(value);
      // const hasSymbol = /[@,#,$,%,&]/.test(value);
      
      setPasswordError({ 
        ...passwordError,
        isLenthy,
        hasUpper,
        // hasLower,
        hasNumber,
        // hasSymbol,
      });
    }

    if(name === "confirmPass") {
      setPasswordError({
        ...passwordError,
        confirmPass: newUser.password === value
      });
    }
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const { firstName, lastName, email, password } = newUser
    let item = { firstName, lastName, email, password };

// FETCH PARA REGISTRO
    let result = await fetch("http://localhost:8000/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(item)
    });
    result = await result.json();
    localStorage.getItem("user-info", JSON.stringify(result)) // <-- ¿Qué esta pasando aquí???
    navigate("/accountSelect");
  };

  return (
    <Container>
      <Row className="bg-form-box mt-4">
        <Col xm={"d-none"} md={5} lg={6} xl={6} className="bg-signup-poster">
        
        </Col>
        <Col className="border">
          <h1 className="fw-bold text-center py-3">Create Account</h1>
          <Formik>
            <Form className="p-4" onSubmit={handleOnSubmit}>
              <div className="d-flex justify-content-between">
                <div>
                  <label htmlFor="name" className="form-label">First Name:</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    name="firstName" 
                    value={newUser.firstName}
                    onChange={handleOnChange}
                    placeholder="Your first name *" 
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Last Name:</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    name="lastName" 
                    value={newUser.lastName} 
                    onChange={handleOnChange}
                    placeholder="Your last name *" 
                  />
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email Address:</label>
                <input 
                  type="email" 
                  className="form-control" 
                  name="email"
                  value={newUser.email} 
                  onChange={handleOnChange}
                  placeholder="email@example.com *"  
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password:</label>
                <input 
                  type="password" 
                  className="form-control" 
                  name="password" 
                  value={newUser.password}
                  onChange={handleOnChange} 
                  placeholder="create your password *" 
                />
              </div>
              <div>
                <label htmlFor="password" className="form-label">Confirm Password:</label>
                <input 
                  type="password" 
                  className="form-control" 
                  name="confirmPass" 
                  value={newUser.confirmPass}
                  onChange={handleOnChange} 
                  placeholder="confirm your password *" 
                />
              </div>
                {!passwordError.confirmPass && (
                  <small className="text-danger">Password doesn't match!</small>
                )}
              <small>
                <ul className="my-3">
                  <li className={passwordError.isLenthy ? "text-success" : "text-danger"}>Min 8 characters</li>
                  <li className={passwordError.hasUpper ? "text-success" : "text-danger"}>At least one upper case</li>
                  {/* <li className={passwordError.hasLower ? "text-success" : "text-danger"}>At least one lower case</li> */}
                  <li className={passwordError.hasNumber ? "text-success" : "text-danger"}>At least one number</li>
                  {/* <li className={passwordError.hasSymbol ? "text-success" : "text-danger"}>At least one special character i.e @ # $ % & </li> */}
                </ul>
              </small>
              <div className="d-flex justify-content-between mb-4 form-check">
                <input type="checkbox" name="connected" className="form-check-input" />
                <small>
                  <label htmlFor="connected" className="form-check-label">By signing up I agree with <a href="*">Terms & Conditions.</a></label>
                </small>
              </div>
              <div>
                <button 
                  type="submit" 
                  className="btn btn-primary btn-block" 
                  disabled={Object.values(passwordError).includes(false)}
                > Get Started
                </button>
                <small>
                  <div className="text-center mt-3">Already a member? <a href="/">Sign in</a></div>
                </small>
              </div>
            </Form>
          </Formik>
        </Col>
      </Row>
    </Container>
  );
};

export default SignupPage;
