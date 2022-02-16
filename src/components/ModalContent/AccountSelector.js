import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import '../../styles/AccountSelector.scss';


const AccountSelector = () => {

  const [typeSelect, setTypeSelect] = useState("");
  const history = useHistory();


  const accountHandler = async () => {
    if(typeSelect !== "") {
      history.push("/signup/"+ typeSelect);
    } else {
      alert("Please, select your account type");
    };
  };

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
