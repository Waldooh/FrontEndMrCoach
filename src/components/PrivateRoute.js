import { Route, Redirect, useLocation } from 'react-router-dom';
import useAuth from './Auth/useAuth';
import routes from '../Routers/Helpers';


const PrivateRoute = (props) => {
  const location = useLocation();
  const { isLogged } = useAuth();

  if(!isLogged()) return <Redirect to={{ pathname: routes.login, state: { from: location } }} />

  return (
    <Route {...props} />
  );
};

export default PrivateRoute;