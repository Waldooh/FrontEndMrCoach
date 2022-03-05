import React, { useState }  from 'react';
import { useHistory } from 'react-router-dom';
import '../../styles/SliderForm.scss';


const CoachForm = () => {

  const history = useHistory();
  const [activeTab, setActiveTab] = useState(0);
  const [coachInfo, setCoachInfo] = useState({
    mobileNumber: "",
    birthDate: "",
    discipline: "",
    country: "",
    state: "", 
    city: "", 
    gender: "",
    description: "",
    coments: "",
    avatar: "",
  });

  const handleOnChange = (e) => {
    const { id, value } = e.target;
    setCoachInfo({ ...coachInfo, [id]: value });
  }

  const handleOnSubmit = async () => {
    let coach = JSON.parse(localStorage.getItem("user-info"));
    let authToken = JSON.parse(localStorage.getItem("jwt"));
    let coachId = coach._id;

    if (activeTab === 6) {
      try {
        let result = await fetch(`https://api.mrcoach.mx/user/${coachId}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            "authorization": authToken,
          },
          body: JSON.stringify(coachInfo)
        });
        result = await result.json();
        console.log("result:", result);
        history.push("/pupils");
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
    console.log("coach:",coachInfo)
    }
    if (btnSwitch === "back" && activeTab > 1) {
      setActiveTab(activeTab - 1);
    }
  };

  return (
    <div className="body">
      <div className="main">
        <h1>Coach Form</h1>
        <div className="pages">
{/* ---------------- Preguntas del formulario (PAG. 0)------------------- */}
          <div className={`page ${activeTab === 0 ? "is-active" : ""} p-5`} data-page="0">
            <h2>Hola,</h2>
            <p>Bienvenido al equipo Mr. Coach, porfavor completa el siguiente formulario y comienza a usar las herramientas que ofrecemos para tí.</p>
          </div>
{/* ---------------- (PAG. 1)------------------- */}
          <div className={`page ${activeTab === 1 ? "is-active" : ""}`} data-page="1">
            <h2>Datos personales</h2>
            <div className="radio-btns">
              <div className="label-container d-flex flex-column">

                <label for="birthday" className="form-label mb-1">Fecha de nacimiento:</label>
                <input 
                  type="date"
                  id="birthDate" 
                  className="form-control" 
                  name="birthDate"
                  value={coachInfo.birthDate}
                  onChange={handleOnChange}
                />
                <label for="phone-number" className="form-label mt-4 mb-1">Movile:</label>
                <div className="d-flex">
                  <input className="w-25 form-control" list="lada" placeholder="MX" />
                  <datalist id="lada">
                    <option value="MX (+52)" />
                    <option value="AR (+54)" />
                    <option value="ES (+34)" />
                    <option value="US (+1)" />
                  </datalist>
                  <input 
                    type="tel" 
                    name="telefono" 
                    className="form-control" 
                    id="mobileNumber"
                    value={coachInfo.mobileNumber}
                    onChange={handleOnChange}
                  />
                </div>
                <div className="d-flex justify-content-between mt-4">
                  <div className="d-flex flex-column">
                    <label className="mb-0">Foto de perfil:</label>
                    <small>(opcional)</small>
                  </div>
                  <label for="foto" className="custom-file">
                    <input 
                      id="foto"
                      type="file" 
                      placeholder="foto"
                      value={coachInfo.avatar}
                      onChange={handleOnChange} 
                    />
                    <span class="material-icons-outlined">add_a_photo</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
{/* ---------------- (PAG. 2)------------------- */}
          <div className={`page ${activeTab === 2 ? "is-active" : ""}`} data-page="2">
            <h2>Lugar de residencia</h2>
            <div className="radio-btns"> 

              <div className="label-container d-flex flex-column">
                <label className="mb-1" for="country">País:</label>
                <input 
                  className="form-control"
                  id="country" 
                  list="country" 
                  placeholder="México"
                  value={coachInfo.country}
                  onChange={handleOnChange}  
                />
                <datalist id="country">
                  <option value="México" />
                  <option value="Colombia" />
                  <option value="Argentina" />
                  <option value="Estados Unidos" />
                  <option value="Chile" />
                  <option value="Brazil" />
                  <option value="Venezuela" />
                </datalist>

                <label className="mb-1 mt-3" for="state">Estado:</label>
                <input 
                  className="form-control" 
                  id="state"
                  list="state" 
                  placeholder="Tabasco" 
                  value={coachInfo.state}
                  onChange={handleOnChange} 
                />
                <datalist id="state">
                  <option value="Durango" />
                  <option value="Chiapas" />
                  <option value="Tabasco" />
                  <option value="Veracruz" />
                  <option value="Oaxaca" />
                  <option value="Tamaulipas" />
                  <option value="Yucatán" />
                </datalist>

                <label className="mb-1 mt-3" for="city">Ciudad:</label>
                <input 
                  className="form-control" 
                  id="city"
                  list="city" 
                  placeholder="Villahermosa"
                  value={coachInfo.city}
                  onChange={handleOnChange}  
                />
                <datalist id="city">
                  <option value="Villahermosa" />
                  <option value="Tuxtla" />
                  <option value="Durango" />
                  <option value="Coatzacoalcos" />
                  <option value="Puerto Escondido" />
                  <option value="Cd. Victoria" />
                  <option value="Mérida" />
                </datalist>
              </div>

            </div>
          </div>
{/* ---------------- (PAG. 3)------------------- */}
          <div className={`page ${activeTab === 3 ? "is-active" : ""}`} data-page="3">
            <h2>Selecciona tu género</h2>
            <div className="radio-btns">
              <label className="custom-radio">
                <input 
                  type="radio" 
                  name="radio"
                  id="gender"
                  value="male"
                  onClick={handleOnChange}  
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
                  id="gender"
                  value="female"
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
                  id="gender"
                  value="other"
                  onClick={handleOnChange} 
                />
                <span className="radio-btn">
                  <span className="material-icons-outlined">check</span>
                  <h3>Otro</h3>
                </span>
              </label>
            </div>
          </div>
{/* ---------------- (PAG. 4)------------------- */}
          <div className={`page ${activeTab === 4 ? "is-active" : ""}`} data-page="4">
            <h2>Describe brevemente tu perfil profesional</h2>
            <div className="radio-btns">
              <div>
                <textarea 
                  rows="4" 
                  cols="50" 
                  type="text" 
                  name="description" 
                  className="longtext-box"
                  id="description"
                  value={coachInfo.description}
                  onChange={handleOnChange}
                >
                  Ej: Soy un entrenador de gimnasio con alta experiencia en boxeo deportivo y sparring de alto rendimiento, etc...
                </textarea>
              </div>

              <div className="text-box">
                <label className="form-label mb-1 mt-4">Disciplina o deporte:</label>
                <input 
                  className="form-control" 
                  type="text" 
                  name="discipline"
                  id="discipline"
                  value={coachInfo.discipline}
                  onChange={handleOnChange} 
                />
              </div>

            </div>
          </div>
{/* ---------------- (PAG. 5)------------------- */}
          <div className={`page ${activeTab === 5 ? "is-active" : ""}`} data-page="5">
            <h2>¿Tienes algún hobbie? Cuéntanos un poco. <small>(opcional)</small></h2>
            <div className="radio-btns">

              <div>
                <textarea 
                  rows="4" 
                  cols="50" 
                  type="text" 
                  name="description" 
                  className="longtext-box"
                  id="coments"
                  value={coachInfo.coments}
                  onChange={handleOnChange}
                >
                  - Fanático del futbol <n/>
                  - Amante de la música rock <n/>
                  - Gusto por los gatos
                </textarea>
              </div>

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
              id="continue" 
              onClick={(activeTab === 6) ? handleOnSubmit : switchPage}
              value={coachInfo}
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
}

export default CoachForm;
