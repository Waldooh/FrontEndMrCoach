import { React, useState, useEffect } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
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
  hasLower: false,
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
      const hasLower = /[a-z]/.test(value);
      const hasNumber = /[0-9]/.test(value);
      
      setPasswordError({ 
        ...passwordError,
        isLenthy,
        hasUpper,
        hasLower,
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
      
      <Row className="card-signup shadow-lg" border="primary" style={{ width: '25rem' }}>
        <h1>Register</h1>
        <Col>
          <Form onSubmit={handleOnSubmit}>
            <Form.Group>
              <Form.Label>Fist Name</Form.Label>
              <Form.Control 
                type="text" 
                name="name" 
                value={newUser.name} 
                onChange={handleOnChange}
                placeholder="Name" 
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Last Name</Form.Label>
              <Form.Control 
                type="text" 
                name="lastName" 
                value={newUser.lastName} 
                onChange={handleOnChange}
                placeholder="Last Name" 
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Email address</Form.Label>
              <Form.Control 
                type="email" 
                name="email" 
                value={newUser.email} 
                onChange={handleOnChange}
                placeholder="Your email *" 
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control 
                type="password" 
                name="password" 
                value={newUser.password}
                onChange={handleOnChange} 
                placeholder="Your Password *" 
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control 
                type="password"
                name="confirmPass" 
                value={newUser.confirmPass}
                onChange={handleOnChange} 
                placeholder="Confirm Password *" 
              />
            </Form.Group>
            <Form.Text>
              {!passwordError.confirmPass && (
                <div className="text-danger mb-3">Password doesn't match!</div>
              )}
            </Form.Text>

            <ul>
              <li className={passwordError.isLenthy ? "text-success" : "text-danger"}>Min 8 characters</li>
              <li className={passwordError.hasUpper ? "text-success" : "text-danger"}>At least one upper case</li>
              <li className={passwordError.hasLower ? "text-success" : "text-danger"}>At least one lower case</li>
              <li className={passwordError.hasNumber ? "text-success" : "text-danger"}>At least one number</li>
            </ul>

            <Button variant="primary" type="submit" disabled={Object.values(passwordError).includes(false)}>
              Sign Up
            </Button>

          </Form>
        </Col>
      </Row>
      <Row>
        <Col>
          <small>
          Already have an account <a href="/">Login now</a>
          </small>
        </Col>
      </Row>
    </Container>
  );
};

export default SignupPage;
