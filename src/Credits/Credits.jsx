import React from 'react';

import './Credits.css';

export const Credits = () => {
  return ( <>
    <header className='header'>
      <div className="HappinessHeart" id="HappinessHeart1">
      </div>
      <div className="header--title">
        <h1>Credits</h1>
      </div>
      <div className="HappinessHeart" id="HappinessHeart2">
      </div>
    </header>
    <div className="credits">
        <div className='credits--bubble Conversation .Conversation__text'>
          <h3> Thanks for playing!</h3>
          <p>This game was originally created as our final course
           project for Digital Academy: Web organized by Czechitas but it gradually
           became something bigger. We developed our own visual novel game engine
            which we hope to keep developing further</p>
        </div>
          <div className='credits--persons'>
               <div className='persons__developers'>
                   <h2>Developers</h2>
                     <div className='verca'></div>
                        <h4>Veronika Rychlá</h4> 
                        <p>JavaScript & React</p>
                     </div>
                     <div className='barca'></div>
                       <h4>Bára Ševčíková</h4> 
                       <p>UX design & CSS</p>
                     </div>
                 </div>
               <div className="persons__mentors">
                    <h2>Mentors</h2>
                     <h4>Ondřej Staněk</h4>
                     <h4>Albert Soriano</h4>
                 </div>
               <div className='persons__artist'>
                    <h2>Artist</h2>
                  <h4>Nikol Schirová </h4>
                 <p>character design</p>
               </div>
               
           <div className='credits--contact'>
             <h2>Kontakty</h2>
             <div className='conatct__person' id="conatct__game">
               <h2>Game</h2>
                <div className='socialMedia'>
                  facebook github pages
                </div>
                </div>
             <div className='conatct__person' id="conatct__verca">
               <h2>Veča</h2>
                <div className='socialMedia'>
                  linked github 
                </div>
                </div>
                <div className='conatct__person' id="conatct__barca">
               <h2>Barča</h2>
                <div className='socialMedia'>
                  linked github 
                </div>
                </div>
              <div className='city'>
                <div className='charlie'></div>
                <div className='hanako'></div>
              </div>

             </div> 
    </>
  );
};
