import React, { useState } from 'react';
import '../../../styles/SliderForm.scss';


const StudentForm = () => {

  const [activeTab, setActiveTab] = useState(0);
  const [myheight, setMyheight] = useState(0);
  const [myweight, setMyweight] = useState(0);
  const [myage, setMyage] = useState(0);
  const [label, setLabel] = useState({
    healthGoal: "",
    workoutFrecuency: "",
    metricStystem: "",
    height: myheight,
    weight: myweight,
    age: myage,
    gender: "",
  });

  const peso = (e) => {
    const peso = e.target.id;
    if(peso === "+" && myweight <= 300) {
      setMyweight(myweight + 1);
    } else if(peso === "-" && myweight > 0) {
      setMyweight(myweight - 1);
    }
  }
  const altura = (e) => {
    const altura = e.target.id;
    if(altura === "+" && myheight <= 200) {
      setMyheight(myheight + 1);
    } else if(altura === "-" && myweight > 0) {
      setMyheight(myheight - 1);
    }
  }
  const edad = (e) => {
    const edad = e.target.id;
    if(edad === "+" && myage < 99) {
      setMyage(myage + 1);
    } else if(edad === "-" && myage > 0) {
      setMyage(myage - 1);
    }
  }

  // const handleOnChange = () => {
    
  // }

  const handleForm = () => {
    let student = localStorage.getItem("user-info");
    let studentParsed = JSON.parse(student);
    let studentId = studentParsed.userId;
    let authToken = studentParsed.token
    return {studentId, authToken}
  }
  
  // try {
  //   let result = await fetch(`http://localhost:8000/user/:${handleForm.studentId}`, {
  //     method: "PATCH",
  //     headers: {
  //       "Content-Type": "application/json",
  //       "authorization": handleForm.authToken,
  //     },
  //     body: studentData,
  //   });
  //   result = await result.json();
  //   console.log("result:", result);
  // } catch (error) {
  //   alert("Error: ", error)
  // }
  const switchPage = async (event) => {
    const btnSwitch = event.target.id;
    
    console.log("target:",event.target)
    console.log("value:",event.target.value)
    if (btnSwitch === "continue" && activeTab < 6) {
      setActiveTab(activeTab + 1);
      console.log(label)
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
          <div className={`page ${activeTab === 0 ? "is-active" : ""} p-5`} data-page="1">
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
                  value="lose weight"
                  onClick={(e)=>setLabel(e.target.value)} 
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
                  value="build muscle"
                  onClick={(e)=>setLabel(e.target.value)}
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
                  value="develop mobility"
                  onClick={(e)=>setLabel(e.target.value)}
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
                  value="increase strength"
                  onClick={(e)=>setLabel(e.target.value)}
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
                  value="none"
                  onClick={(e)=>setLabel(e.target.value)} 
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
                  value="fiew a month"
                  onClick={(e)=>setLabel(e.target.value)} 
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
                  value="fiew a week"
                  onClick={(e)=>setLabel(e.target.value)} 
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
                  value="dayli"
                  onClick={(e)=>setLabel(e.target.value)}   
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
                  value="anglosajon"
                  onClick={(e)=>setLabel(e.target.value)}  
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
                  value="decimal"
                  onClick={(e)=>setLabel(e.target.value)}  
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

              <label className="custom-radio">
                <input 
                  type="number" 
                  name="radio"
                  onClick={(e)=>setLabel(e.target.value)}  
                  checked 
                />
                <span className="radio-btn justify-content-between">
                  <h3>Height: {myheight}</h3>
                  <div className="d-inline">
                    <button className="d-block" id="+" onClick={altura}>+</button>
                    <button className="d-block" id="-" onClick={altura}>-</button>
                  </div>
                </span>
              </label>

              <label className="custom-radio">
                <input 
                  type="number" 
                  name="radio"
                  onClick={(e)=>setLabel(e.target.value)}  
                />
                <span className="radio-btn justify-content-between">
                  <h3>Weight: {myweight}</h3>
                  <div className="d-inline">
                    <button className="d-block" id="+" onClick={peso}>+</button>
                    <button className="d-block" id="-" onClick={peso}>-</button>
                  </div>
                </span>
              </label>

              <label className="custom-radio">
                <input 
                  type="number" 
                  name="radio" 
                />
                <span className="radio-btn justify-content-between">
                  <h3>Age: {myage}</h3>
                  <div className="d-inline">
                    <button className="d-block" id="+" onClick={edad}>+</button>
                    <button className="d-block" id="-" onClick={edad}>-</button>
                  </div>
                </span>
              </label>
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
                  onClick={(e)=>setLabel(e.target.value)}  
                  checked 
                />
                <span className="radio-btn">
                  <span className="material-icons-outlined">check</span>
                  <h3>Maculino</h3>
                </span>
              </label>
              <label className="custom-radio">
                <input 
                  type="radio" 
                  name="radio" 
                  value="female"
                  onClick={(e)=>setLabel(e.target.value)}  
                />
                <span className="radio-btn">
                  <span className="material-icons-outlined">check</span>
                  <h3>Femenino</h3>
                </span>
              </label>
              <label className="custom-radio">
                <input 
                  type="radio" 
                  name="radio"
                  value="other"
                  onClick={(e)=>setLabel(e.target.value)}  
                />
                <span className="radio-btn">
                  <span className="material-icons-outlined">check</span>
                  <h3>Otro</h3>
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
              onClick={switchPage}
              // onSubmit={}
              value={label}
            >
              Continue 
              <span class="material-icons-outlined">chevron_right</span>
            </button>

            <div className="nav">
              <ul className="tabs">
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

            <button 
              id="back" 
              onClick={switchPage}
            >
              <span class="material-icons-outlined">chevron_left</span>
              Back
            </button>
          </div>
        </div>
      </div>

    </div>
  )
};

export default StudentForm;
      