
import AuthProvider from './components/Auth/AuthProvider';
import AppRouter from './Routers/AppRouter';
import Layout from './components/Layout';
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <Layout>
            <AppRouter />
          </Layout>
        </AuthProvider>
      </Router>
    </>
  );
};

export default App;
