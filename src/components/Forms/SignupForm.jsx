import React from 'react';
import { Container, Form, Button, Card } from 'react-bootstrap';
import '../styles/Signup.css';



const SignupForm = () => {
  return (
    
      <Container>
      <Card className="card-signup shadow-lg" border="primary" style={{ width: '25rem' }}>
        <Card.Header>
          <h1>User Registration</h1>
        </Card.Header>
        <Card.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Fist Name</Form.Label>
              <Form.Control type="text" placeholder="Name" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="email" placeholder="Last Name" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Your email *" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Your Password *" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" placeholder="Confirm Password *" />
            </Form.Group>

            <ul>
              <li className="text-danger">Min 8 characters</li>
              <li className="text-danger">At least one upper case</li>
              <li className="text-danger">At least one lower case</li>
              <li className="text-danger">At least one number</li>
            </ul>

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
