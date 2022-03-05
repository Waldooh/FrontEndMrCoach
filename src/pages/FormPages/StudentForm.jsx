import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../../styles/SliderForm.scss';


const StudentForm = () => {

  const history = useHistory();
  const [activeTab, setActiveTab] = useState(0);
  const [studentInfo, setStudentInfo] = useState({
    healthGoal: "",
    workoutFrecuency: "",
    metricStystem: "",
    height: "",
    weight: "",
    age: "",
    gender: "",
  });


  const handleOnChange = (e) => {
    const { id, value } = e.target;
    setStudentInfo({ ...studentInfo, [id]: value });
    console.log(studentInfo)
  }

  const handleOnSubmit = async () => {
    let student = JSON.parse(localStorage.getItem("user-info"));
    let authToken = JSON.parse(localStorage.getItem("jwt"));
    let studentId = student._id;

    if (activeTab === 6) {
      try {
        let result = await fetch(`https://api.mrcoach.mx/user/${studentId}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            "authorization": authToken,
          },
          body: JSON.stringify(studentInfo)
        });
        result = await result.json();
        console.log("result:", result);
        history.push("/routines");
        window.location.reload();
      } catch (error) {
        alert("Error: ", error)
      };
    };
  };
  
  
  const switchPage = (event) => {
    const btnSwitch = event.target.id;
    if (btnSwitch === "continue" && activeTab <= 6) {
      setActiveTab(activeTab + 1);
    }
    if (btnSwitch === "back" && activeTab > 1) {
      setActiveTab(activeTab - 1);
    }
  };

  return (
    <div className="body">
      <div className="main">
        <h1>Student  Form</h1>
        <div className="pages">
{/* ---------------- Preguntas del formulario (PAG. 0)------------------- */}
          <div className={`page ${activeTab === 0 ? "is-active" : ""} p-5`} data-page="0">
            <h2>Hola,</h2>
            <p>Gracias por registrarte en Mr. Coach, a continuaciónte haremos algunas preguntas para asegurarnos de que cumplas tus metas.</p>
          </div>
{/* ---------------- (PAG. 1)------------------- */}
          <div className={`page ${activeTab === 1 ? "is-active" : ""}`} data-page="1">
            <h2>Stablish your goal</h2>
            <div className="radio-btns">
              <label className="custom-radio">
                <input 
                  type="radio" 
                  name="radio" 
                  id="healthGoal"
                  value="lose weight"
                  onClick={handleOnChange} 
                  checked 
                />
                <span className="radio-btn">
                  <span className="material-icons-outlined">check</span>
                  <h3>Lose weight</h3>
                </span>
              </label>

              <label className="custom-radio">
                <input 
                  type="radio" 
                  name="radio" 
                  id="healthGoal"
                  value="build muscle"
                  onClick={handleOnChange}
                />
                <span className="radio-btn">
                  <span className="material-icons-outlined">check</span>
                  <h3>Build muscle</h3>
                </span>
              </label>

              <label className="custom-radio">
                <input 
                  type="radio" 
                  name="radio" 
                  id="healthGoal"
                  value="develop mobility"
                  onClick={handleOnChange}
                />
                <span className="radio-btn">
                  <span className="material-icons-outlined">check</span>
                  <h3>Develop mobility</h3>
                </span>
              </label>

              <label className="custom-radio">
                <input 
                  type="radio" 
                  name="radio" 
                  id="healthGoal"
                  value="increase strength"
                  onClick={handleOnChange}
                />
                <span className="radio-btn">
                  <span className="material-icons-outlined">check</span>
                  <h3>Increase strength</h3>
                </span>
              </label>
            </div>
          </div>
{/* ---------------- (PAG. 2)------------------- */}
          <div className={`page ${activeTab === 2 ? "is-active" : ""}`} data-page="2">
            <h2>How frecuently you workout?</h2>
            <div className="radio-btns"> 
              <label className="custom-radio"> 
                <input 
                  type="radio" 
                  name="radio"
                  id="workoutFrecuency" 
                  value="none"
                  onClick={handleOnChange}  
                  checked 
                />
                <span className="radio-btn">
                  <span className="material-icons-outlined">check</span>
                  <h3>None</h3>
                </span>
              </label>

              <label className="custom-radio">
                <input 
                  type="radio" 
                  name="radio" 
                  id="workoutFrecuency"
                  value="fiew a month"
                  onClick={handleOnChange} 
                />
                <span className="radio-btn">
                  <span className="material-icons-outlined">check</span>
                  <h3>Fiew days a month</h3>
                </span>
              </label>
              <label className="custom-radio"> 
                <input 
                  type="radio" 
                  name="radio"
                  id="workoutFrecuency"
                  value="fiew a week"
                  onClick={handleOnChange} 
                />
                <span className="radio-btn">
                  <span className="material-icons-outlined">check</span>
                  <h3>Fiew days a week</h3>
                </span>
              </label>
              <label className="custom-radio">
                <input 
                  type="radio" 
                  name="radio" 
                  id="workoutFrecuency"
                  value="dayli"
                  onClick={handleOnChange}    
                />
                <span className="radio-btn">
                  <span className="material-icons-outlined">check</span>
                  <h3>Almost dayli</h3>
                </span>
              </label>
            </div>
          </div>
{/* ---------------- (PAG. 3)------------------- */}
          <div className={`page ${activeTab === 3 ? "is-active" : ""}`} data-page="3">
            <h2>Select your metric system</h2>
            <div className="radio-btns">
              <label className="custom-radio">
                <input 
                  type="radio" 
                  name="radio"
                  id="metricStystem"
                  value="anglosajon"
                  onClick={handleOnChange}  
                  checked 
                />
                <span className="radio-btn">
                  <span className="material-icons-outlined">check</span>
                  <h3>lb, ft, inch</h3>
                </span>
              </label>
              <label className="custom-radio">
                <input 
                  type="radio" 
                  name="radio"
                  id="metricStystem"
                  value="decimal"
                  onClick={handleOnChange}  
                />
                <span className="radio-btn">
                  <span className="material-icons-outlined">check</span>
                  <h3>kg, m, cm</h3>
                </span>
              </label>
            </div>
          </div>
{/* ---------------- (PAG. 4)------------------- */}
          <div className={`page ${activeTab === 4 ? "is-active" : ""}`} data-page="4">
            <h2>Indicate your age, weight and height</h2>
            <div className="radio-btns">
              <div className="label-container">
              <label className="mb-0 mt-3"><h6>Height:</h6></label>
                <input 
                  className="form-control"
                  type="number"
                  name="radio"
                  id="height"
                  value={studentInfo.height}
                  onChange={handleOnChange}
                />

              <label className="mb-0 mt-3"><h6>Weight:</h6></label>
                <input
                  className="form-control"
                  type="number"
                  name="radio"
                  id="weight"
                  value={studentInfo.weight}
                  onChange={handleOnChange}
                />

              <label className="mb-0 mt-3"><h6>Age:</h6></label>
                <input 
                  className="form-control"
                  type="number" 
                  name="radio" 
                  id="age"
                  value={studentInfo.age}
                  onChange={handleOnChange}
                />
              
              </div>
            </div>
          </div>
{/* ---------------- (PAG. 5)------------------- */}
          <div className={`page ${activeTab === 5 ? "is-active" : ""}`} data-page="5">
            <h2>Selecciona tu género</h2>
            <div className="radio-btns">
              <label className="custom-radio">
                <input 
                  type="radio" 
                  name="radio" 
                  value="male"
                  id="gender"
                  onClick={handleOnChange}  
                  checked 
                />
                <span className="radio-btn">
                  <span className="material-icons-outlined">check</span>
                  <h3>Male</h3>
                </span>
              </label>
              <label className="custom-radio">
                <input 
                  type="radio" 
                  name="radio" 
                  value="female"
                  id="gender"
                  onClick={handleOnChange} 
                />
                <span className="radio-btn">
                  <span className="material-icons-outlined">check</span>
                  <h3>Female</h3>
                </span>
              </label>
              <label className="custom-radio">
                <input 
                  type="radio" 
                  name="radio"
                  value="other"
                  id="gender"
                  onClick={handleOnChange}  
                />
                <span className="radio-btn">
                  <span className="material-icons-outlined">check</span>
                  <h3>Other</h3>
                </span>
              </label>
            </div>
          </div>
{/* ---------------- (PAG. 6  Registro Completo)------------------- */}
          <div className={`page ${activeTab === 6 ? "is-active" : ""} p-5`} data-page="6">
            <h2>¡Felicitaciones!</h2>
            <p>Estás listo para comenzar a lograr tus metas con tu coach ideal.</p>
          </div>
{/* -------------- Footer Navigator ------------------- */}
          <div className="footer-nav">

            <button 
              className="pl-2.2" 
              id="continue" 
              onClick={(activeTab === 6) ? handleOnSubmit : switchPage}
              value={studentInfo}
            >Continue 
              <span class="material-icons-outlined">chevron_right</span>
            </button>

            <div className="nav">
              <ul className={(activeTab === 0) ? "d-none" : "tabs"}>
                <li className={`tab ${activeTab === 1 ? "is-active": ""}`}>
                  <a data-tab="1"></a>
                </li>
                <li className={`tab ${activeTab === 2 ? "is-active": ""}`}>
                  <a data-tab="2"></a>
                </li>
                <li className={`tab ${activeTab === 3 ? "is-active": ""}`}>
                  <a data-tab="3"></a>
                </li>
                <li className={`tab ${activeTab === 4 ? "is-active": ""}`}>
                  <a data-tab="4"></a>
                </li>
                <li className={`tab ${activeTab === 5 ? "is-active": ""}`}>
                  <a data-tab="5"></a>
                </li>
                <li className={`tab ${activeTab === 6 ? "is-active": ""}`}>
                  <a data-tab="6"></a>
                </li>
              </ul>
            </div>
            {(activeTab === 0)
            ? "" 
            : <button id="back" onClick={switchPage}>
                <span class="material-icons-outlined">chevron_left</span>
                Back
              </button>}
          </div>
        </div>
      </div>

    </div>
  )
};

export default StudentForm;
      