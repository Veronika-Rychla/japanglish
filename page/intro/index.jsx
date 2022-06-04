import React from 'react';
import './styles.css';
import '../heroes/styles.css';
import '../howToPlay/styles.css';

const howToPlay = () => {
  document.getElementById('intro').style.display = 'none';
  document.getElementById('howToPlay').style.display = 'flex';
};

const charactersDisplay = () => {
  document.getElementById('howToPlay').style.display = 'none';
  document.getElementById('characters').style.display = 'flex';
};

let nextPage = 0;

const loadNextPage = () => {
  if (nextPage === 0) {
    howToPlay();
    nextPage++;
  } else if (nextPage === 1) {
    charactersDisplay();
    nextPage++;
  } else {
    nextPage++;
    window.location.href = '/game';
  }
};

export const Intro = () => {
  return (
    <>
      <div className="page_container" onClick={loadNextPage}>
        <section id="intro">
          <div className="title">JAPANGLISH</div>
          <div className="trip">Trip to Tokyo</div>
          <a href="#" className="parpadea trip">
            {' '}
            Click anywhere{' '}
          </a>
        </section>
        <section id="howToPlay">
          <div className="title">How to play</div>
          <div className="nav">
            <div className="nav--field">
              <p>Subcribe how to play</p>
            </div>
            <div className="nav--field">
              <div className="nav--img nav--flex" id="nav--button">
                <div className="container">
                  <div className="content"></div>
                  <div className="avatar"></div>
                </div>
              </div>
              <div className="nav--sub">
                <p>používej tlačítko pro pohyb</p>
              </div>
            </div>
            <div className="nav--field">
              <div className="nav--img nav--flex" id="nav--heart"></div>
              <div className="nav--sub">
                <p>
                  Měřák nálady - když přijdeš o všechnu dobrou náladu, následuje
                  tragický konec!
                </p>
              </div>
            </div>
            <div className="nav--field">
              <div className="avatar2 nav--flex" data-tooltip="guguru">
                <p>
                  <strong>ググル</strong>
                </p>
              </div>
              <div className="nav--sub">
                <p>Co to je za rosypaný čaj?! dotkni se ho</p>
              </div>
            </div>
            <div className="nav--field">
              <div className="nav--icon nav--flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M13.5 2c-5.629 0-10.212 4.436-10.475 10h-3.025l4.537 5.917 4.463-5.917h-2.975c.26-3.902 3.508-7 7.475-7 4.136 0 7.5 3.364 7.5 7.5s-3.364 7.5-7.5 7.5c-2.381 0-4.502-1.119-5.876-2.854l-1.847 2.449c1.919 2.088 4.664 3.405 7.723 3.405 5.798 0 10.5-4.702 10.5-10.5s-4.702-10.5-10.5-10.5z"
                    fill="#fff"
                  />
                </svg>
              </div>
              <div className="nav--sub">
                <p>Restart</p>
              </div>
            </div>
          </div>
          <a href="#" className="parpadea trip">
            Click anywhere
          </a>
        </section>
        <section id="characters">
          <div className="heroes">
            <div className="title">
              <h1>Heroes</h1>
            </div>
            <div className="heroes--char">
              <div className="char__img" id="charlie--img"></div>
              <div className="char__text">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                  optio sit culpa molestiae perferendis illum nostrum? Id,
                  voluptate nemo. Adipisci eligendi vitae veritatis facilis eos
                  rem dolorem dolores impedit sequi.
                </p>
              </div>
            </div>
            <div className="heroes--char">
              <div className="char__img" id="hanako--img"></div>
              <div className="char__text">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                  unde, aspernatur quo impedit deserunt repellat nemo officia
                  perferendis dolorum dicta vitae in eos, aut hic eum, nihil
                  explicabo corrupti maxime?
                </p>
              </div>
            </div>
          </div>
          <a href="#" className="parpadea trip">
            Click anywhere to start the game
          </a>
        </section>
      </div>
      <footer>
        <div className="media">media</div>
      </footer>
    </>
  );
};
