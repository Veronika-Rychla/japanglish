import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';
import './style.css';
import { Intro } from '../page/intro';
import { Locations } from './Locations';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="game" element={<Locations />} />
      </Routes>
    </BrowserRouter>
  );
};

createRoot(document.querySelector('#app')).render(<App />);
