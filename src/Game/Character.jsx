import React from 'react';

import './Character.css';

export const Character = (props) => {
  const { character, mood } = props;

  if (!mood) return null;

  return (
    <img
      className="Character"
      alt={character}
      src={`/chibi/${mood}`}
      width={100}
      height={150}
    />
  );
};
