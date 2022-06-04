import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import { Intro } from '../page/intro';
import { Locations } from './Locations';

const App = () => {
  return <Intro />;
};

createRoot(document.querySelector('#app')).render(<App />);
