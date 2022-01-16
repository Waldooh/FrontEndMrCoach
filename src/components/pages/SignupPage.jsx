import { Formik, Form } from 'formik';
import { React, useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/Signup.css';

const initialState = {
  name: "",
  lastName: "",
  email: "",
  password: "",
  confirmPass: "",
};
const passVerification = {
  isLenthy: false,
  hasUpper: false,
  // hasLower: false,
  hasNumber: false,
  confirmPass: false,
};

const SignupPage = () => {

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
      
      setPasswordError({ 
        ...passwordError,
        isLenthy,
        hasUpper,
        // hasLower,
        hasNumber,
      });
    }

    if(name === "confirmPass") {
      setPasswordError({
        ...passwordError,
        confirmPass: newUser.password === value
      });
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
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
                  <label for="name" className="form-label">First Name:</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    name="name" 
                    value={newUser.name} 
                    onChange={handleOnChange}
                    placeholder="Your first name *" 
                  />
                </div>
                <div className="mb-3">
                  <label for="name" className="form-label">Last Name:</label>
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
                <label for="email" className="form-label">Email Address:</label>
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
                <label for="password" className="form-label">Password:</label>
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
                <label for="password" className="form-label">Confirm Password:</label>
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
                </ul>
              </small>
              <div className="d-flex justify-content-between mb-4 form-check">
                <input type="checkbox" name="connected" className="form-check-input" />
                <small>
                  <label for="connected" className="form-check-label">By signing up I agree with <a href="*">Terms & Conditions.</a></label>
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
