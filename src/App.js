import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/LoginPage';
import Signup from './pages/SignupPage';
import AccountType from './pages/AccountSelect';
import Landing from './pages/LandingPage';
import UserForm from './components/CarruselForm/UserForm';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/accountSelect" element={<AccountType />} />
      <Route path="/landing" element={<Landing />} />
      <Route path="/signup/userform" element={<UserForm />} />
    </Routes>
  );
}

export default App;
