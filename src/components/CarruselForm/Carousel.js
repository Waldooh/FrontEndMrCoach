import React from 'react';
import FitGirl from '../img/fitnessGirl.png';
import FitMan from '../img/FullBodyPlank.jpg';
import BodyBuilder from '../img/bgMrCoach.jpg';
import '../../styles/CarruselForm.scss';

const UserForm = () => {


  return (
    <div className="slider-container">
      <ul className="slider-form">
        <li id="slide-1">
          <img src={FitGirl} style={{ width: "680px" }} alt='...' />
        </li>
        <li id="slide-2">
          <img src={FitMan} style={{ width: "680px" }} alt='...' />
        </li>
        <li id="slide-3">
          <img src={BodyBuilder} style={{ width: "680px" }} alt='...' />
        </li>
      </ul>

      <ul className="menu-slider">
        <li><a href="#slide-1">1</a></li>
        <li><a href="#slide-2">2</a></li>
        <li><a href="#slide-3">3</a></li>
      </ul>


    </div>
  );
};

export default UserForm;
