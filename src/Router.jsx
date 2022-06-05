import React from 'react';
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';

import { Intro } from '../page/intro';
import { Game } from './Game/Game';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="game" element={<Game />} />
      </Routes>
    </BrowserRouter>
  );
};
