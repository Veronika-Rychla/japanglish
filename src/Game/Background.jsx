import React from 'react';

export const Background = (props) => {
  const { backgroundImage } = props;

  const changeBackground = document.querySelector('body');
  changeBackground.style.backgroundImage = `url(./background/${backgroundImage})`;

  return null;
};
