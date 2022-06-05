import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

import { Router } from './Router';

// import './style.css';

const App = () => {
  return (
    <>
      <Router />
    </>
  );
};

createRoot(document.querySelector('#app')).render(<App />);
