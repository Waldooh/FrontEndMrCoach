import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../pages/LoginPage';
import Signup from '../pages/SignupPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}

export default App;
