import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import '../../index.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
    </Routes>
  );
}

export default App;
