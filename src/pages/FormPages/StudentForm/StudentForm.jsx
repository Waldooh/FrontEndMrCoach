import React, { useState } from 'react';
import '../../../styles/SliderForm.scss';


const StudentForm = () => {

  const [activeTab, setActiveTab] = useState(0);

  const switchPage = (event) => {
    const btnSwitch = event.target.id;
    if (btnSwitch === "continue" && activeTab < 7) {
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
          <div className={`page ${activeTab === 0 ? "is-active" : ""} p-5`} data-page="1">
            <h2>Hola,</h2>
            <p>Gracias por registrarte en Mr. Coach, a continuaciónte haremos algunas preguntas para asegurarnos de que cumplas tus metas.</p>
          </div>
{/* ---------------- (PAG. 1)------------------- */}
          <div className={`page ${activeTab === 1 ? "is-active" : ""}`} data-page="1">
            <h2>¿Cuál es tu principal objetivo?</h2>
            <div className="radio-btns">
              <label className="custom-radio">
                <input type="radio" name="radio" checked />
                <span className="radio-btn">
                  <span className="material-icons-outlined">check</span>
                  <h3>Bajar de peso</h3>
                </span>
              </label>
              <label className="custom-radio">
                <input type="radio" name="radio" />
                <span className="radio-btn">
                  <span className="material-icons-outlined">check</span>
                  <h3>Ganar músculo</h3>
                </span>
              </label>
              <label className="custom-radio">
                <input type="radio" name="radio" />
                <span className="radio-btn">
                  <span className="material-icons-outlined">check</span>
                  <h3>Mejorar movilidad</h3>
                </span>
              </label>
              <label className="custom-radio">
                <input type="radio" name="radio" />
                <span className="radio-btn">
                  <span className="material-icons-outlined">check</span>
                  <h3>Aumentar resistencia</h3>
                </span>
              </label>
            </div>
          </div>
{/* ---------------- (PAG. 2)------------------- */}
          <div className={`page ${activeTab === 2 ? "is-active" : ""}`} data-page="2">
            <h2>¿Qué tan seguido realizas actividad física?</h2>
            <div className="radio-btns"> 
              <label className="custom-radio"> 
                <input type="radio" name="radio" checked />
                <span className="radio-btn">
                  <span className="material-icons-outlined">check</span>
                  <h3>Nothing</h3>
                </span>
              </label>
              <label className="custom-radio">
                <input type="radio" name="radio" />
                <span className="radio-btn">
                  <span className="material-icons-outlined">check</span>
                  <h3>Fiew days a month</h3>
                </span>
              </label>
              <label className="custom-radio"> 
                <input type="radio" name="radio" />
                <span className="radio-btn">
                  <span className="material-icons-outlined">check</span>
                  <h3>Fiew days a week</h3>
                </span>
              </label>
              <label className="custom-radio">
                <input type="radio" name="radio" />
                <span className="radio-btn">
                  <span className="material-icons-outlined">check</span>
                  <h3>Almost dayli</h3>
                </span>
              </label>
            </div>
          </div>
{/* ---------------- (PAG. 3)------------------- */}
          <div className={`page ${activeTab === 3 ? "is-active" : ""}`} data-page="3">
            <h2>Selecciona tu sistema métrico</h2>
            <div className="radio-btns">
              <label className="custom-radio">
                <input type="radio" name="radio" checked />
                <span className="radio-btn">
                  <span className="material-icons-outlined">check</span>
                  <h3>lb, ft, inch</h3>
                </span>
              </label>
              <label className="custom-radio">
                <input type="radio" name="radio" />
                <span className="radio-btn">
                  <span className="material-icons-outlined">check</span>
                  <h3>kg, m, cm</h3>
                </span>
              </label>
            </div>
          </div>
{/* ---------------- (PAG. 4)------------------- */}
          <div className={`page ${activeTab === 4 ? "is-active" : ""}`} data-page="4">
            <h2>Indica tu edad, peso y altura</h2>
            <div className="radio-btns">
              <label className="custom-radio">
                <input type="radio" name="radio" checked />
                <span className="radio-btn">
                  <span className="material-icons-outlined">check</span>
                  <h3>Estatura: </h3>
                </span>
              </label>
              <label className="custom-radio">
                <input type="radio" name="radio" />
                <span className="radio-btn">
                  <span className="material-icons-outlined">check</span>
                  <h3>Peso: </h3>
                </span>
              </label>
              <label className="custom-radio">
                <input type="radio" name="radio" />
                <span className="radio-btn">
                  <span className="material-icons-outlined">check</span>
                  <h3>Edad: </h3>
                </span>
              </label>
            </div>
          </div>
{/* ---------------- (PAG. 5)------------------- */}
          <div className={`page ${activeTab === 5 ? "is-active" : ""}`} data-page="5">
            <h2>Selecciona tu género</h2>
            <div className="radio-btns">
              <label className="custom-radio">
                <input type="radio" name="radio" checked />
                <span className="radio-btn">
                  <span className="material-icons-outlined">check</span>
                  <h3>Maculino</h3>
                </span>
              </label>
              <label className="custom-radio">
                <input type="radio" name="radio" />
                <span className="radio-btn">
                  <span className="material-icons-outlined">check</span>
                  <h3>Femenino</h3>
                </span>
              </label>
              <label className="custom-radio">
                <input type="radio" name="radio" />
                <span className="radio-btn">
                  <span className="material-icons-outlined">check</span>
                  <h3>Otro</h3>
                </span>
              </label>
            </div>
          </div>
{/* ---------------- (PAG. 6)------------------- */}
          <div className={`page ${activeTab === 6 ? "is-active" : ""}`} data-page="6">
            <h2>¿Cuánta experiencia tienes en entrenamientos de fuerza?</h2>
            <div className="radio-btns">
              <label className="custom-radio">
                <input type="radio" name="radio" checked />
                <span className="radio-btn">
                  <span className="material-icons-outlined">check</span>
                  <h3>Nada</h3>
                </span>
              </label>
              <label className="custom-radio">
                <input type="radio" name="radio" />
                <span className="radio-btn">
                  <span className="material-icons-outlined">check</span>
                  <h3>Algunos meses </h3>
                </span>
              </label>
              <label className="custom-radio">
                <input type="radio" name="radio" />
                <span className="radio-btn">
                  <span className="material-icons-outlined">check</span>
                  <h3>Menos de 5 años</h3>
                </span>
              </label>
              <label className="custom-radio">
                <input type="radio" name="radio" />
                <span className="radio-btn">
                  <span className="material-icons-outlined">check</span>
                  <h3>5+ años</h3>
                </span>
              </label>
            </div>
          </div>
{/* ---------------- (PAG. 7  Registro Completo)------------------- */}
          <div className={`page ${activeTab === 7 ? "is-active" : ""} p-5`} data-page="7">
            <h2>¡Felicitaciones!</h2>
            <p>Estás listo para comenzar a lograr tus metas con tu coach ideal.</p>
          </div>
{/* -------------- Footer Navigator ------------------- */}
          <div className="footer-nav">

            <button className="pl-2.2" id="continue" onClick={switchPage}>
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
                <li className={`tab ${activeTab === 7 ? "is-active": ""}`}>
                  <a data-tab="7"></a>
                </li>
              </ul>
            </div>

            <button id="back" onClick={switchPage}>
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
      