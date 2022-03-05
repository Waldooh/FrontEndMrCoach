import React, { createContext, useState } from 'react';
import { useHistory } from 'react-router-dom';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const history = useHistory();
  const [user, setUser] = useState({});
  const [coaches, setCoaches] = useState([]);
  const [exercises, setExercises] = useState([]);
  const [pupils, setPupils] = useState([]);

//---------------- Peticiones fetch -----------------//
  const coachesData = async () => {
    const info = await fetch("https://api.mrcoach.mx/user", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "authorization": localStorage.getItem("jwt")
      }
    }).then(res => res.json());
    let filterInfo = info.payload.allUsers.filter(element => 
      (element.account === "entrenador")
    );
    setCoaches(filterInfo);
  };
  
  const pupilsData = async () => {
    const info = await fetch(`https://api.mrcoach.mx/contract/${account.userId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "authorization": localStorage.getItem("jwt")
      }
    }).then(res => res.json());
    let pupilInfo = info.payload.oneContract.map(item => {return item.student})
    setPupils(pupilInfo);
  };
  
  const userData = async () => {
    const info = await fetch(`https://api.mrcoach.mx/user/${account.userId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "authorization": localStorage.getItem("jwt")
      }
    }).then(res => res.json());
    setUser(info.payload);
  };

  const exercisesList = async () => {
    await fetch("https://api.mrcoach.mx/workout/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "authorization": localStorage.getItem("jwt")
      },
    })
    .then((result) => result.json())
    .then((json) => {
      setExercises(json.payload.allExercises)
    })
  };
//------------------------------------//

  const account = JSON.parse(localStorage.getItem("user-info"));
  
  const logRedirect = fromLocation => {fromLocation && history.push(fromLocation)};
  
  const logOut = () => localStorage.removeItem("jwt");

  const isLogged = () => localStorage.getItem("jwt");

  let contextValue = {
    exercises,
    exercisesList,
    coaches,
    coachesData,
    pupils,
    pupilsData,
    user,
    userData,
    account,
    isLogged,
    logRedirect,
    logOut
  }; 

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>  
  );
};

export default AuthProvider;