import React from 'react'
// import { Container, Row, Col, Button } from 'react-bootstrap';
import '../styles/AccountType.css';


const AccountSelect = () => {
  return (
    <div className="main-container">
      <h2>Please choose an account type</h2>
      <div className="radio-buttons">
        <label className="custom-radio">
          <input type="radio" name="radio" checked />
          <span className="radio-btn">
            <span className="material-icons-outlined">check</span>
            <div className="accounts-icon">
              <span className="material-icons-outlined">fitness_center</span>
              <h3>Student</h3>
            </div>
          </span>
        </label>
        <label className="custom-radio">
          <input type="radio" name="radio" />
          <span className="radio-btn">
            <span className="material-icons-outlined">check</span>
              <div className="accounts-icon">
                <span className="material-icons-outlined">sports</span>
                <h3>Coach</h3>
              </div>
          </span>
        </label>
      </div>
      <button type="submit" className="continue-btn btn btn-primary my-5">Continue</button>
          {/* <img src="https://img.icons8.com/fluency/96/000000/whistle.png"/>
        <img src="https://img.icons8.com/fluency/96/000000/dumbbell.png"/> */}
    </div>
  );
};

export default AccountSelect
