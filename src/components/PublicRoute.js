import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import useAuth from './Auth/useAuth';

const PublicRoute = (props) => {
  const { isLogged } = useAuth();

  if(isLogged()) return <Redirect to="routines" />

  return (
    <Route {...props} />
  );
};

export default PublicRoute;