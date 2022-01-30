import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import '../styles/AccountSelector.scss';


const AccountSelector = () => {

  const [typeSelect, setTypeSelect] = useState("");

  const navigate = useNavigate();

  const handlerSelect = (e) => {
    const typeSelect = e.target.value;

    setTypeSelect(typeSelect);
    console.log(typeSelect);
  }


  const handleAccount = async () => {

    let userData = localStorage.getItem("user-info");
    let userDataParse = JSON.parse(userData);
    let AuthToken = userDataParse.token;
    console.log(userDataParse)
    // Después de seleccionar cuenta
    let result = await fetch(`http://localhost:8000/user/${userDataParse.userId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        // "Accept": "application/json",
        // "authorization": AuthToken
      },
      // body: JSON.stringify(userData)
    });
    result = await result.json();
    console.log("result:",result)
    if(result.payload.account === "usuario") {
      localStorage.setItem("account-info", JSON.stringify(result.payload))
      navigate("/signup/studentform");
    } else if(result.payload.account === "entrenador") {
      localStorage.setItem("account-info", JSON.stringify(result.payload))
      navigate("/signup/coachform");
    }
  }

  return (
    <div className="main-container">
      <h2>Please choose what type of account you want to create</h2>
      <div className="radio-buttons">
        <label className="custom-btn">
          <input type="radio" name="radio" value="alumno" onClick={handlerSelect} checked />
          <span className="radio-button">
            <span className="material-icons-outlined">check</span>
            <div className="accounts-icon">
              <img src="https://img.icons8.com/fluency/96/000000/dumbbell.png"/>
              {/* <span className="material-icons-outlined">fitness_center</span> */}
              <h3>Student</h3>
            </div>
          </span>
        </label>
        <label className="custom-btn">
          <input type="radio" name="radio" value="entrenador" onClick={handlerSelect} />
          <span className="radio-button">
            <span className="material-icons-outlined">check</span>
              <div className="accounts-icon">
                <img src="https://img.icons8.com/fluency/96/000000/whistle.png"/>
                {/* <span className="material-icons-outlined">sports</span> */}
                <h3>Coach</h3>
              </div>
          </span>
        </label>
      </div>
      <button 
        type="submit" 
        className="continue-btn my-3"
        onClick={handleAccount}
      >Continue  
      </button>
        
    </div>
  );
};

export default AccountSelector;
