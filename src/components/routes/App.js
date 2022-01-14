import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import SignupPage from '../pages/SignupPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<SignupPage />} />
    </Routes>
  );
}

export default App;
