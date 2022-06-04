import React, { useEffect } from 'react';

const jsonData = require('../../src/gameData/gameConfig.json');

let day = 0;

const getLocationName = () => {
  return jsonData.locations[day].name;
};

// const getBackgroundImage = () => {
//  const changeBackground = document.querySelector('body');
//  changeBackground.style.backgroundImage = `url(../game/img/${jsonData.locations[day].background})`;
// };

export const Locations = () => {
 // getBackgroundImage();
  return (
    <>
      <section className="locationBody">
        <div class="menu">
          <div class="navigation__buttons">
            <div class="buttons--reset">
              <img class="icon__img" src="img/restart.svg" alt="reset icon" />
            </div>
            <div class="buttons--end"></div>
          </div>
          <div class="navigation__day">
            <p>Day 1</p>
          </div>
        </div>
        <div class="menu--location">
          <h3>{getLocationName()}</h3>
        </div>
        <div class="board">
          <div class="board--charlie"></div>
          <div class="board--hanako"></div>
        </div>
        <div class="name">
      <div class="name--charlie name--type "><p>Charlie</p></div>
      <div class="name--hanako name--type"><p>Hanako</p></div>
    </div>
        <div class="dialog">
          <div class="dialog--text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              ullam facilis culpa modi quo laborum earum commodi dolores,
              numquam ut blanditiis delectus perferendis explicabo nostrum quas
              maxime, adipisci sapiente rerum.
            </p>
          </div>
          <div class="dialog--heart"></div>
          <div class="dialog--container">
            <div class="container__content"></div>
            <div class="container__avatar"></div>
          </div>
        </div>
      </section>
    </>
  );
};
