import React, { createContext } from 'react';
import { useHistory } from 'react-router-dom';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const history = useHistory();

  const logRedirect = (fromLocation) => {
    if(fromLocation) {
      history.push(fromLocation);
    }
  };

  const logOut = () => {
    localStorage.removeItem("jwt");
  };

  const isLogged = () => localStorage.getItem("jwt")

  let contextValue = {
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