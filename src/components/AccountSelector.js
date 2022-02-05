import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import '../styles/AccountSelector.scss';


const AccountSelector = () => {

  const [typeSelect, setTypeSelect] = useState("");
  const navigate = useNavigate();


  const accountHandler = async () => {
    if(typeSelect !== "") {
      navigate("/signup/"+ typeSelect);
    } else {
      alert("Please, select your account type");
    }
  };

  // const handleAccount = async (e) => {

  //   let userData = localStorage.getItem("user-info");
  //   let userDataParse = JSON.parse(userData);
  //   let AuthToken = userDataParse.token;
  //   console.log(userDataParse)
  //   // Después de seleccionar cuenta
  //   try {

  //     let result = await fetch(`http://localhost:8000/user/${userDataParse.userId}`, {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //         // "Accept": "application/json",
  //         // "authorization": AuthToken
  //       },
  //       // body: JSON.stringify(userData)
  //     });
  //     result = await result.json();
  //     console.log("result:",result)
  //     if(result.payload.account === "usuario") {
  //       localStorage.setItem("account-info", JSON.stringify(result.payload))
  //       navigate("/signup/studentform");
  //     } else if(result.payload.account === "entrenador") {
  //       localStorage.setItem("account-info", JSON.stringify(result.payload))
  //       navigate("/signup/coachform");
  //     }
  //   } catch (error) {
  //     console.error(error)
  //   }
  // }

  return (
    <div className="main-container">
      <h2>Please choose what type of account you want to create</h2>
      <div className="radio-buttons">
        <label className="custom-btn">
          <input 
            type="radio" 
            name="radio" 
            value="alumno" 
            onClick={(e)=>setTypeSelect(e.target.value)} 
            checked 
          />
          <span className="radio-button">
            <span className="material-icons-outlined">check</span>
            <div className="accounts-icon">
              <img src="https://img.icons8.com/fluency/96/000000/dumbbell.png" alt="mancuerna" />
              <h3>Student</h3>
            </div>
          </span>
        </label>
        <label className="custom-btn">
          <input 
            type="radio" 
            name="radio" 
            value="entrenador" 
            onClick={(e)=>setTypeSelect(e.target.value)}
          />
          <span className="radio-button">
            <span className="material-icons-outlined">check</span>
              <div className="accounts-icon">
                <img src="https://img.icons8.com/fluency/96/000000/whistle.png" alt="silbato" />
                <h3>Coach</h3>
              </div>
          </span>
        </label>
      </div>
      <button 
        type="submit" 
        className="continue-btn my-3"
        onClick={accountHandler}
        value={typeSelect}
      >Continue  
      </button>
        
    </div>
  );
};

export default AccountSelector;
