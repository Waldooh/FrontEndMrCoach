import { React, useState, useEffect } from 'react';
import { Container, Form, Button, Card } from 'react-bootstrap';
import '../styles/Signup.css';

const initialState = {
  name: "",
  lastName: "",
  email: "",
  password: "",
  confirmPass: "",
};
const passVerification = {
  isLenghty: false,
  hasUpper: false,
  hasLower: false,
  hasNumber: false,
  confirmPass: false
};


const SignupForm = () => {
  
  const [newUser, setNewUser] = useState(initialState);
  const [passwordError, setPasswordError] = useState(passVerification);

  useEffect(() => {}, [newUser]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setNewUser({ ...newUser, [name]: value });

    if(name === "password") {
      const isLenghty = value.lenght > 8;
      const hasUpper = /[A-Z]/.test(value);
      const hasLower = /[a-z]/.test(value);
      const hasNumber = /[0-9]/.test(value);
      
      setPasswordError({ 
        ...passwordError,
        isLenghty,
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

  console.log(newUser);
  return (
    <Container>
      
      <Card className="card-signup shadow-lg" border="primary" style={{ width: '25rem' }}>
        
        <Card.Header>
          <h1>Register</h1>
        </Card.Header>

        <Card.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Fist Name</Form.Label>
              <Form.Control 
                type="text" 
                name="name" 
                value={newUser.name} 
                onChange={handleOnChange}
                placeholder="Name" 
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="email" name="lastName" value={newUser.lastName} placeholder="Last Name" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control 
                type="email" 
                name="email" 
                value={newUser.email} 
                onChange={handleOnChange}
                placeholder="Your email *" 
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control 
                type="password" 
                name="password" 
                value={newUser.password}
                onChange={handleOnChange} 
                placeholder="Your Password *" 
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control 
                type="password"
                name="confirmPass" 
                value={newUser.confirmPass}
                onChange={handleOnChange} 
                placeholder="Confirm Password *" 
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control 
                type="password"
                name="confirmPass" 
                value={newUser.confirmPass}
                onChange={handleOnChange} 
                placeholder="Confirm Password *" 
              />
            </Form.Group>
            <ul>
              <li className="text-succes">Min 8 characters</li>
              <li className="text-danger">At least one upper case</li>
              <li className="text-danger">At least one lower case</li>
              <li className="text-danger">At least one number</li>
            </ul>

            <Button variant="primary" type="submit">
              Submit
            </Button>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>

    </Container>
  );
};

export default SignupForm;
