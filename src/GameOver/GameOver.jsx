import React from 'react';

import './GameOver.css';

export const GameOver = () => {
  return (
    <>
      <span>
        <div className="Canva">
          <div className="GameOver__selected">
            You were killed by a shinkansen!
          </div>
          <div>
            <img
              className="Game__toolbar-restart GameOver--button"
              alt="restart"
              src="/restart.svg"
              width={50}
              height={50}
              onClick={() => window.location.assign('/game')}
            />
          </div>
        </div>
      </span>
    </>
  );
};
