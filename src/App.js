
import AuthProvider from './components/Auth/AuthProvider';
import AppRouter from './Routers/AppRouter';
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
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
