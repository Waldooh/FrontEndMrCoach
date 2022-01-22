import React, { useState } from 'react'
import { useNavigate } from 'react-router';
// import { Container, Row, Col, Button } from 'react-bootstrap';
import '../styles/AccountType.scss';


const AccountSelect = () => {

  const [typeSelect, setTypeSelect] = useState("alumno");
  const navigate = useNavigate();

  const handlerSelect = (e) => {
    const typeSelect = e.target.value
    console.log("select: ", typeSelect)
  }

  const handleAccount = async () => {

    let userData = localStorage.getItem("user-info");
    let userDataParse = JSON.parse(userData);
    let AuthToken = userDataParse.token;
    // Después de seleccionar cuenta
    let result = await fetch(`http://localhost:8000/user/${userDataParse.userId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        // "Accept": "application/json",
        "authorization": AuthToken
      },
      // body: JSON.stringify(userData)
    });
    result = await result.json();
    console.log("result:",result)
    if(result.payload.account === "usuario") {
      localStorage.setItem("account-info", JSON.stringify(result.payload))
      navigate("/signup/userform");
    } else if(result.payload.account === "entrenador") {
      localStorage.setItem("account-info", JSON.stringify(result.payload))
      navigate("/signup/coachform");
    }
  }


  return (
    <div className="main-container">
      <h2>Please choose an account type</h2>
      <div className="radio-buttons">
        <label className="custom-radio">
          <input type="radio" name="radio" value="alumno" onClick={handlerSelect} checked />
          <span className="radio-btn">
            <span className="material-icons-outlined">check</span>
            <div className="accounts-icon">
              <span className="material-icons-outlined">fitness_center</span>
              <h3>Student</h3>
            </div>
          </span>
        </label>
        <label className="custom-radio">
          <input type="radio" name="radio" value="entrenador" onClick={handlerSelect} />
          <span className="radio-btn">
            <span className="material-icons-outlined">check</span>
              <div className="accounts-icon">
                <span className="material-icons-outlined">sports</span>
                <h3>Coach</h3>
              </div>
          </span>
        </label>
      </div>
      <button 
        type="submit" 
        className="continue-btn btn btn-primary my-5"
        onClick={handleAccount}
      >Continue  
      </button>
          {/* <img src="https://img.icons8.com/fluency/96/000000/whistle.png"/>
        <img src="https://img.icons8.com/fluency/96/000000/dumbbell.png"/> */}
    </div>
  );
};

export default AccountSelect
