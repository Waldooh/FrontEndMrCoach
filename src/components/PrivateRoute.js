import { Route, Redirect, useLocation } from 'react-router-dom';
// import useAuth from './Auth/useAuth';
import routes from '../Routers/Helpers';
import Layout from './Layout';


const PrivateRoute = (props) => {
  const location = useLocation();
  const isLogged = localStorage.getItem("jwt");

  if(!isLogged) return <Redirect to={{ pathname: routes.login, state: { from: location } }} />

  return (
    <Layout>
      <Route {...props} />
    </Layout>
  );
};

export default PrivateRoute;