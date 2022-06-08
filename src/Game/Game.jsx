import React from 'react';

import { Character } from './Character';
import { Conversation } from './Conversation';
import { HappinessMetre } from './HappinessMetre';
import { useGameState } from './useGameState';
import { getLocationObject } from './getLocationObject';
import { getConversation } from './getConversation';

import './Game.css';

export const Game = () => {
  const [gameState, dispatch] = useGameState();

  const currentConversation = getConversation(
    gameState.currentLocation,
    gameState.conversationIndex,
  );

  return (
    <div
      className="Game"
      style={{
        backgroundImage: `url(/background/${
          getLocationObject(gameState.currentLocation).background
        })`,
      }}
    >
      <audio
        autoPlay
        loop
        key={getLocationObject(gameState.currentLocation).music}
      >
        <source src={getLocationObject(gameState.currentLocation).music} />
      </audio>
      <div className="Game__toolbar">
        <HappinessMetre happiness={gameState.currentHappiness} />
        <img
          className="Game__toolbar-restart"
          alt="restart"
          src="/restart.svg"
          width={50}
          height={50}
          onClick={() => window.location.reload()}
        />
      </div>
      <h1 className="Game__location">{gameState.currentLocation}</h1>
      <div className="Game__character">
        <Character
          character={currentConversation.character}
          mood={currentConversation.mood}
        />
      </div>

      <Conversation
        text={currentConversation.text}
        type={currentConversation.type}
        options={currentConversation.options}
        dispatch={dispatch}
      />
    </div>
  );
};
