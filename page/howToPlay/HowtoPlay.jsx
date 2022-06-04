import React from 'react';
import './styles.css';

export const HowtoPlay = () => {
  return (
    <>
      <section class="how">
        <div class="title">How to play</div>
        <div class="nav">
          <div class="nav--field">
            <p>Subcribe how to play</p>
          </div>
          <div class="nav--field">
            <div class="nav--img nav--flex" id="nav--button">
              <div class="container">
                <div class="content"></div>
                <div class="avatar"></div>
              </div>
            </div>
            <div class="nav--sub">
              <p>používej tlačítko pro pohyb</p>
            </div>
          </div>
          <div class="nav--field">
            <div class="nav--img nav--flex" id="nav--heart"></div>
            <div class="nav--sub">
              <p>
                Měřák nálady - když přijdeš o všechnu dobrou náladu, následuje
                tragický konec!
              </p>
            </div>
          </div>
          <div class="nav--field">
            <div class="avatar2 nav--flex" data-tooltip="guguru">
              <p>
                <strong>ググル</strong>
              </p>
            </div>
            <div class="nav--sub">
              <p>Co to je za rosypaný čaj?! dotkni se ho</p>
            </div>
          </div>
          <div class="nav--field">
            <div class="nav--icon nav--flex">
              <img class="icon__img" src="img/restart.svg" alt="reset icon" />
            </div>
            <div class="nav--sub">
              <p>Restart</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
