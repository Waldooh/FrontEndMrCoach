import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Formulario from '../pages/Form';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Formulario />} />
    </Routes>
  );
}

export default App;
