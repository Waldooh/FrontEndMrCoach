import React from 'react';
import '../styles/Popup.scss';

const Popup = (props) => {

  const handleContentClick = (e) => {
    e.stopPropagation();
  };

  return (props.trigger) ? (
    <div className="popup" onClick={()=>props.setTrigger(false)}>
      <div className="content-inner" onClick={handleContentClick}>
        <button 
          className="close-btn material-icons-outlined" 
          onClick={()=>props.setTrigger(false)}
        >close
        </button>
        { props.children }
      </div>
    </div>
  ) : "";
}

export default Popup;
