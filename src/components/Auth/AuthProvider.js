import React, { createContext, useState } from 'react';
import { useHistory } from 'react-router-dom';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const history = useHistory();
  const [user, setUser] = useState(null);
  // const [user, setUser] = useState({});

  // hacer una función para validar token
  const logIn = (userCredentials, fromLocation) => {
    setUser(true);
    if(fromLocation) {
      history.push(fromLocation);
    }
  };

  const logOut = () => setUser(null);

  const isLogged = () => !!user;

  let contextValue = {
    user,
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