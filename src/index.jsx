import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

import { Router } from './Router';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <Router />
    </div>
  );
};

createRoot(document.querySelector('#root')).render(<App />);
