import React, { useReducer } from 'react';

import { gameConfig } from './gameConfig';
import { Background } from './Background';
import { Character } from './Character';

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

  // const [day, setDay] = useState(0);
  // const [dialogue, setDialogue] = useState(0);

  // // Start functions

  // const getLocationName = () => {
  //   return jsonData.locations[day].name;
  // };

  // const getDialogue = () => {
  //   return jsonData.locations[day].conversation[dialogue].text;
  // };

  // const getCharacter = () => {
  //   return jsonData.locations[day].conversation[dialogue].character;
  // };

  // const getMood = () => {
  //   return `./chibi/${jsonData.locations[day].conversation[dialogue].mood}`;
  // };

  // const getType = () => {
  //   return jsonData.locations[day].conversation[dialogue].type;
  // };

  // const getTestQuestions = () => {
  //   return jsonData.locations[day].conversation[dialogue].options;
  // };

  // const incrementDialogue = () => {
  //   console.log(
  //     `Conversation lenght is ${jsonData.locations[day].conversation.length}`,
  //   );
  //   console.log(`Dialogue lenght is ${dialogue}`);
  //   if (jsonData.locations[day].conversation.length > dialogue + 1) {
  //     setDialogue(dialogue + 1);
  //   } else {
  //     setDialogue(0);
  //     console.log(`Location lenght is ${jsonData.locations.length} and ${day}`);
  //     if (jsonData.locations.length > day + 1) {
  //       setDay(day + 1);
  //     }
  //   }
  // };

  // console.log(dialogue);

  const currentConversation = getConversation(
    gameState.currentLocation,
    gameState.conversationIndex,
  );

  return (
    <div>
      <Background
        backgroundImage={
          getLocationObject(gameState.currentLocation).background
        }
      />
      <h1>{gameState.currentLocation}</h1>
      <div>
        <Character
          name={currentConversation.name}
          mood={currentConversation.mood}
        />
        <div>{currentConversation.text}</div>
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
