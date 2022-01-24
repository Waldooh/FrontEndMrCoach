import React from 'react';
import '../../../styles/SliderForm.scss';

const CoachForm = () => {

  window.onload = () => {
    const tab_switchers = document.querySelectorAll('[data-switcher]');

    for (let i=0; i<tab_switchers.length; i++) {
      const tab_switcher = tab_switchers[i];
      const page_id = tab_switcher.dataset.tab;

      tab_switcher.addEventListener('click', () => {
        document.querySelector('.tabs .tab.is-active').classList.remove('is-active');
        tab_switcher.parentNode.classList.add('is-active');

        SwitchPage(page_id);
      });
    }
  };
  const SwitchPage = (page_id) => {
    console.log(page_id)
    const current_page = document.querySelector('.pages .page.is-active');
    current_page.classList.remove('is-active');

    const next_page = document.querySelector(`.pages .page[data-page="${page_id}"]`);
    next_page.classList.add('is-active');
  }; 

  return (
    <div className="body">
      <div className="main">
        <h1>Coach Form</h1>
        <div className="pages">

{/* ---------------- Preguntas del formulario (PAG. 1)------------------- */}
          <div className="page is-active" data-page="1">
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
          <div className="page" data-page="2">
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
          <div className="page" data-page="3">
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
          <div className="page" data-page="4">
            <h2>Indica tu edad, peso y altura</h2>
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

          <div className="footer-nav">

            <button>
              Continue 
              <span class="material-icons-outlined">chevron_right</span>
            </button>

            <div className="nav">
              <ul className="tabs">
                <li className="tab is-active">
                <a data-switcher data-tab="1">1</a>
                </li>
                <li className="tab">
                <a data-switcher data-tab="2">2</a>
                </li>
                <li className="tab">
                <a data-switcher data-tab="3">3</a>
                </li>
                <li className="tab">
                <a data-switcher data-tab="4">4</a>
                </li>
              </ul>
            </div>

            <button>
              <span class="material-icons-outlined">chevron_left</span>
              Back
            </button>
          </div>

        </div>
      </div>

    </div>
  )
}

export default CoachForm;
