import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Plantilla2 from '../Forms/plantilla2';
import Login from '../pages/LoginPage';
import PlantillaLogin from '../pages/PlantillaLogin';
import Signup from '../pages/SignupPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/plantillalogin" element={<PlantillaLogin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/plantilla" element={<Plantilla2 />} />
    </Routes>
  );
}

export default App;
