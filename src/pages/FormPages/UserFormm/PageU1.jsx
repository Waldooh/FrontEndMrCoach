import React from 'react';
import '../../../styles/UserForm.scss';

const PageU1 = () => {

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
    <div className="body-userform">
      <div className="header-userform">
        <nav className="nav-userform">
          <h1>User Form</h1>
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
        </nav>
      </div>

      <div className="main-userform">
        <div className="pages">
          <div className="page is-active" data-page="1">
            <h2>¿Cuál es tu principal objetivo?</h2>
            <p>Welcome to page 1</p>
          </div>
          <div className="page" data-page="2">
            <h2>Page 2</h2>
            <p>Welcome to page 2</p>
          </div>
          <div className="page" data-page="3">
            <h2>Page 3</h2>
            <p>Welcome to page 3</p>
          </div>
          <div className="page" data-page="4">
            <h2>Page 4</h2>
            <p>Welcome to page 4</p>
          </div>
        </div>
      </div>

      {/* <button>Continue</button> */}
    </div>
  )
};

export default PageU1;
      