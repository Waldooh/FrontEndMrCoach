import React from 'react';
import '../styles/Popup.scss';

const Popup = (props) => {
  return (props.trigger) ? (
    <div className="popup-account">
      <div className="account-inner">
        <button className="close-btn" onClick={()=>props.setTrigger(false)}>
          <span class="material-icons-outlined">close</span>
        </button>
        { props.children }
      </div>
    </div>
  ) : "";
}

export default Popup;
