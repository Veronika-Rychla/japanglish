import React from 'react';

import './GameOver.css';

export const GameOver = () => {
  return (
    <>
      <span>
      <div className="GameOver">You were killed by a shinkansen!</div>
      <div><img
        className="Game__toolbar-restart"
        alt="restart"
        src="/restart.svg"
        width={50}
        height={50}
        onClick={() => window.location.reload()}
        
      />
      </div>
      </span>
    </>
  );
};
