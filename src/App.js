
import AuthProvider from './components/Auth/AuthProvider';
import AppRouter from './Routers/AppRouter';
// import Layout from './components/Layout';
import { BrowserRouter as Router } from 'react-router-dom'
import useAuth from './components/Auth/useAuth';

function App() {

  // const { user } = useAuth();

  return (
    <>
      <Router>
        <AuthProvider>
          <AppRouter />
        </AuthProvider>
      </Router>
    </>
  );
};

export default App;
