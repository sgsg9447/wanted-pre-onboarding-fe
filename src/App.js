import React, { useState } from 'react';
import Login from './pages/Login';
import Home from './pages/Home';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
