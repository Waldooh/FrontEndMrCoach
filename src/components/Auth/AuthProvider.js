import React, { createContext, useState } from 'react';
import { useHistory } from 'react-router-dom';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const history = useHistory();
  const [user, setUser] = useState({});
  const [coaches, setCoaches] = useState([]);

// Peticiones fetch
  const coachesData = async () => {
    const info = await fetch("http://localhost:8000/user", {
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
  
  const userData = async () => {
    const info = await fetch(`http://localhost:8000/user/${account.userId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "authorization": localStorage.getItem("jwt")
      }
    }).then(res => res.json());
    setUser(info.payload);
  };
//------------------------------------//

  const account = JSON.parse(localStorage.getItem("user-info"));
  
  const logRedirect = fromLocation => {fromLocation && history.push(fromLocation)};
  
  const logOut = () => localStorage.removeItem("jwt");

  const isLogged = () => localStorage.getItem("jwt");

  let contextValue = {
    coaches,
    coachesData,
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