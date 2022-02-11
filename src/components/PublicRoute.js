import React from 'react';
import { Redirect, Route, useLocation } from 'react-router-dom';
import routes from '../Routers/Helpers';
// import useAuth from './Auth/useAuth';

const PublicRoute = (props) => {
  const location = useLocation();
  const jwt = localStorage.getItem("jwt");
  if(jwt) return <Redirect to={{ pathname: routes.routines, state: { from: location } }}  />

  return (
    <Route {...props} />
  );
};

export default PublicRoute;