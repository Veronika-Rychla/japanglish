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
  }
};

export const Intro = () => {
  return (
    <>
      <div className="page_container" onClick={loadNextPage}>
        <section id="intro">
          <div className="title">JAPANGLISH</div>
          <div className="trip">Trip to Tokyo</div>
          <a href="#" class="parpadea trip">
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
                <img
                  className="icon__img"
                  src="img/restart.svg"
                  alt="reset icon"
                />
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
          <div className="title">
            <h1>Heroes</h1>
          </div>
          <div className="heroes">
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
