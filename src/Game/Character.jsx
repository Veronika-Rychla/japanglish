import React from 'react';

export const Character = (props) => {
  const { character, mood } = props;

  if (!mood) return null;

  return (
    <img alt={character} src={`/chibi/${mood}`} width={100} height={150} />
  );
};
