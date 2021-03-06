import React from 'react';

import './Credits.css';

export const Credits = () => {
  return (
    <>
      
      <div className="credits">
      <div className="header">
        <div className="HappinessHeart" id="HappinessHeart1"></div>
        <div className="header--title">
          <h1 className="title__text" id="credits__title">Credits</h1>
        </div>    
        <div className="HappinessHeart" id="HappinessHeart2"></div>
      </div>
        <div className="Conversation .Conversation__text" id="credits--bubble">
          <h3> Thanks for playing!</h3>
          <p className='credit__paragraf'>
            This game was originally created as our final course project for <strong>Digital Academy: Web </strong>organized by <strong>  Czechitas </strong> but it gradually became
            something bigger. We developed our own visual novel game engine
            which we hope to keep developing further.
          </p>
        </div>
        <div className="credits--persons">
          <div className="persons--div" id="developers">
            <h2>Developers</h2>
            <div className="div__people">
              <h4>Veronika Rychlá</h4>
              <h7>JavaScript & React</h7>
            </div>
            <div className="div__people">
              <h4>Bára Ševčíková</h4>
              <h7>HTML/CSS & UX/IX</h7>
            </div>

            <div className="persons--div" id="mentors">
              <h2>Mentors</h2>
              <div className="div__people">
                <h4>Ondřej Staněk</h4>
                <h4>Albert Soriano</h4>
              </div>
            </div>

            <div className="persons--div" id="artist">
              <h2>Artist</h2>
              <div className="div__people">
                <h4>Nikol Schirová </h4>
                <h7>character design</h7>
              </div>
            </div>
          </div>
        </div>

        <div className="credits--contact">

          <div className="contact--title">
            <h2>Contact</h2>
          </div>

          <div className="contact--content">

            <div className="content--personal">
              <div className="personal__name">
                <h6>Game</h6>
              </div>
              <div className="name__icon">
                <a href='https://www.facebook.com/Japanglishgame' target="_blank">
                <div className="facebook"></div>
                </a>
              </div>
            </div>

            <div className="content--personal">
                  <div className="personal__name">
                    <h6>Veronika</h6>
                 </div>
                <div className="name__icon">
                    <a href="https://github.com/Veronika-Rychla">
                    <div className="github"></div>
                    </a>
                  < a href="https://www.linkedin.com/in/veronika-rychl%C3%A1-084226187/">
                    <div className="linkedin"></div>
                  </a>
                </div>
              </div>
            

              <div className="content--personal">
                <div className="personal__name">
                  <h6>Bára</h6>
                </div>
                <div className="name__icon">
                  <a href='https://github.com/ronwain'>
                  <div className="github"></div> 
                  </a>
                  <a href='https://www.linkedin.com/in/barca-sevcikova-046976229/'>
                  <div className="linkedin"></div>
                  </a>
                </div>
              </div>
            </div>
          
        </div>
      </div>
    </>
  );
};
