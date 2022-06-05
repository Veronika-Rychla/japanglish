import React, { useReducer } from 'react';

import { gameConfig } from './gameConfig';
import { Background } from './Background';
import { Character } from './Character';
import { Conversation } from './Conversation';

const initialState = {
  currentLocation: 'Train station',
  conversationIndex: 0,
};

const gameReducer = (state, action) => {
  switch (action.type) {
    case 'moveToNextConversation':
      const nextLocation = getConversation(
        state.currentLocation,
        state.conversationIndex,
      ).nextLocation;

      if (nextLocation) {
        return {
          ...state,
          currentLocation: nextLocation,
          conversationIndex: 0,
        };
      }

      return {
        ...state,
        conversationIndex: state.conversationIndex + 1,
      };

    default:
      console.error('Invalid action ', { action, state });
      return state;
  }
};

const getLocationObject = (location) => {
  return gameConfig.locations[location];
};

const getConversation = (location, conversationIndex) => {
  return getLocationObject(location).conversation[conversationIndex];
};

export const Game = () => {
  const [gameState, dispatch] = useReducer(gameReducer, initialState);

  const currentConversation = getConversation(
    gameState.currentLocation,
    gameState.conversationIndex,
  );

  return (
    <div className="Game">
      <Background
        backgroundImage={
          getLocationObject(gameState.currentLocation).background
        }
      />
      <h1>{gameState.currentLocation}</h1>
      <div>
        <Character
          character={currentConversation.character}
          mood={currentConversation.mood}
        />
        <Conversation
          text={currentConversation.text}
          type={currentConversation.type}
        />
      </div>
      <div>
        <button
          onClick={() => {
            dispatch({ type: 'moveToNextConversation' });
          }}
        >
          Go next
        </button>
      </div>
    </div>
  );

  // End functions

  // return (
  //   <>
  //     <section className="locationBody">
  //       <div className="menu">
  //         <div className="navigation__buttons">
  //           <div className="buttons--reset">
  //             <img
  //               className="icon__img"
  //               src="img/restart.svg"
  //               alt="reset icon"
  //             />
  //           </div>
  //           <div className="buttons--end"></div>
  //         </div>
  //         <div className="navigation__day">
  //           <p>Day {day + 1}</p>
  //         </div>
  //       </div>
  //       <div className="menu--location">
  //         <h3>{getLocationName()}</h3>
  //       </div>
  //       <div className="board">
  //         {/* <img src={getMood()} /> */}
  //         {getCharacter()}
  //         <div className="board--charlie"></div>
  //         <div className="board--hanako"></div>
  //       </div>
  //       <div className="dialog">
  //         <div className="dialog--text">
  //           <p>{getDialogue()}</p>
  //           <p>{getTestQuestions()}</p>
  //         </div>
  //         <div className="dialog--heart"></div>
  //         <div className="dialog--container">
  //           <div className="container__content"></div>
  //           <div className="container__avatar" onClick={incrementDialogue}>
  //             Next
  //           </div>
  //         </div>
  //       </div>
  //     </section>
  //   </>
  // );
};
