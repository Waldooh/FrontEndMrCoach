import React, { createContext, useState } from 'react';
import { useHistory } from 'react-router-dom';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const history = useHistory();

  const logIn = (fromLocation) => {
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
    logIn,
    logOut
  }; 

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>  
  );
};

export default AuthProvider;