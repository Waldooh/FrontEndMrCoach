import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/SideMenu.scss';
import useAuth from './Auth/useAuth';
import logo from './img/mrCoach-simbol.png';
import yo from './img/Yo.jpg';
import routes from '../Routers/Helpers';
import NavigateCoach from './ModalContent/NavigateCoach';
import NavigateStudent from './ModalContent/NavigateStudent';



const SideMenu = (props) => {

  const { logOut, account, userData, user } = useAuth();
  const [isactive, setIsactive] = useState(false);
  
  const [collapse, setCollapse] = useState(false);
  const timeOut = () => {
    setCollapse(!collapse);
    setTimeout(setCollapse, 5000);
  };

  useEffect(() => {
    userData();
  }, []);

  useEffect(() => {
    props.onCollapse(isactive)
  }, [isactive]);

  return (
    <div className={`side-menu ${isactive ? "isactive" : ""}`}>
      <div className="top-section">
        <div className="logo">
          {!isactive
            ? <img src={logo} alt='MrCoach' />
            : ""
          }
        </div>
        <div onClick={()=>{setIsactive(!isactive)}} className="toggle-menu-btn">
          {!isactive 
            ? <span class="material-icons-outlined">arrow_back_ios</span> 
            : <span class="material-icons-outlined">menu</span> 
          }
        </div>
      </div>
      <hr />

      {(account.account==="entrenador")
        ? <NavigateCoach />
        : <NavigateStudent />
      }
      
      <div className="footer-menu">
        <div className="dropup">
          <button className="avatar" 
            onClick={timeOut}>
            <img src={user.avatar} alt="user badge" />
          </button>
          {collapse
            ? <ul className="drop-menu">
                <Link to={routes.profile} className="dropdown-item my-1">Profile</Link>
                <Link to="#" className="dropdown-item my-1">Settings</Link>
                <hr className="dropdown-divider m-0" />
                <Link to="#" className="dropdown-item my-1" onClick={logOut}>Sign out</Link>
              </ul> 
            : ""
          }
        </div>
        
        <div className="user-info">
          <h5>Armando Ríos</h5>
          <p>armandorg95@hotmail.com</p>
        </div>       
      </div>  
    </div>
  );
}

export default SideMenu;
