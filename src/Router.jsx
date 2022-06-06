import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Intro } from './Intro/Intro';
import { Game } from './Game/Game';
import { Credits } from './Credits/Credits';
import { GameOver } from './GameOver/GameOver';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="game" element={<Game />} />
        <Route path="gameover" element={<GameOver />} />
        <Route path="credits" element={<Credits />} />
      </Routes>
    </BrowserRouter>
  );
};
