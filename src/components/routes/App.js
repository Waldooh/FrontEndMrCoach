import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Plantilla2 from '../Forms/plantilla2';
import Login from '../pages/Login';
import SignupPage from '../pages/SignupPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/plantilla" element={<Plantilla2 />} />
    </Routes>
  );
}

export default App;
