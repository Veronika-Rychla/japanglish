import React, { useState } from 'react';

const jsonData = require('../../src/gameData/gameConfig.json');

export const Locations = () => {
  const [day, setDay] = useState(0);
  const [dialogue, setDialogue] = useState(0);

  // Start functions

  const getLocationName = () => {
    return jsonData.locations[day].name;
  };

  const getBackgroundImage = () => {
    const changeBackground = document.querySelector('body');
    changeBackground.style.backgroundImage = `url(./background/${jsonData.locations[day].background})`;
  };

  const getDialogue = () => {
    return jsonData.locations[day].conversation[dialogue].text;
  };

  const getCharacter = () => {
    return jsonData.locations[day].conversation[dialogue].character;
  };

  const getMood = () => {
    return `./chibi/${jsonData.locations[day].conversation[dialogue].mood}`;
  };

  const getType = () => {
    return jsonData.locations[day].conversation[dialogue].type;
  };

  const incrementDialogue = () => {
    console.log(
      `Conversation lenght is ${jsonData.locations[day].conversation.length}`,
    );
    console.log(`Dialogue lenght is ${dialogue}`);
    if (jsonData.locations[day].conversation.length > dialogue + 1) {
      setDialogue(dialogue + 1);
    } else {
      setDialogue(0);
      console.log(`Location lenght is ${jsonData.locations.length} and ${day}`);
      if (jsonData.locations.length > day + 1) {
        setDay(day + 1);
      }
    }
  };

  console.log(dialogue);

  // End functions

  getBackgroundImage();
  return (
    <>
      <section className="locationBody">
        <div className="menu">
          <div className="navigation__buttons">
            <div className="buttons--reset">
              <img
                className="icon__img"
                src="img/restart.svg"
                alt="reset icon"
              />
            </div>
            <div className="buttons--end"></div>
          </div>
          <div className="navigation__day">
            <p>Day {day + 1}</p>
          </div>
        </div>
        <div className="menu--location">
          <h3>{getLocationName()}</h3>
        </div>
        <div className="board">
          {/* <img src={getMood()} /> */}
          {getCharacter()}
          <div className="board--charlie"></div>
          <div className="board--hanako"></div>
        </div>
        <div className="dialog">
          <div className="dialog--text">
            <p>{getDialogue()}</p>
          </div>
          <div className="dialog--heart"></div>
          <div className="dialog--container">
            <div className="container__content"></div>
            <div className="container__avatar" onClick={incrementDialogue}>
              Next
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
