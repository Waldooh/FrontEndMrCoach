import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/LoginPage';
import Signup from './pages/SignupPage';
import AccountType from './pages/AccountSelect';
import Landing from './pages/LandingPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/accountSelect" element={<AccountType />} />
      <Route path="/landing" element={<Landing />} />
    </Routes>
  );
}

export default App;
