import React from 'react';
import './Background.css';

export const Background = (props) => {
  const { backgroundImage } = props;

  const changeBackground = document.querySelector('body');
  changeBackground.style.backgroundImage = `url(/background/${backgroundImage})`;

  return null;
};
