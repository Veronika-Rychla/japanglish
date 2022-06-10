import React from 'react';

import './Credits.css';

export const Credits = () => {
  return ( <>
    <header className='header'>
      <div className="HappinessHeart" id="HappinessHeart1">
      </div>
      <div className="header--title">
        <p className="title__text">Credits</p>
      </div>
      <div className="HappinessHeart" id="HappinessHeart2">
      </div>
    </header>
    <div className="credits">
        <div className='Conversation .Conversation__text' id="credits--bubble">
          <h3> Thanks for playing!</h3>
          <p>This game was originally created as our final course
           project for Digital Academy: Web organized by Czechitas but it gradually
           became something bigger. We developed our own visual novel game engine
            which we hope to keep developing further</p>
        </div>
          <div className='credits--persons'>

               <div className="persons--div" id="developers">
                   <h2>Developers</h2>
                     <div className='div__people'>
                        <h4>Veronika Rychlá</h4> 
                        <p>JavaScript & React</p>
                     </div>
                     <div className="div__people">
                       <h4>Bára Ševčíková</h4> 
                       <p>UX design & CSS</p>
                     </div>
                  
               <div className="persons--div" id="mentors">
                    <h2>Mentors</h2>
                    <div className='div__people'>
                     <h4>Ondřej Staněk</h4>
                     <h4>Albert Soriano</h4>
                     </div>
                 </div>

               <div className="persons--div" id="artist">
                    <h2>Artist</h2>
                    <div className='div__people'>
                  <h4>Nikol Schirová </h4>
                 <p>character design</p>
                 </div>
               </div>

             </div>
             </div>

           <div className='credits--contact'>
             <div className='contact--title'>
               <h4>Contact</h4>
             </div>
             <div className='contact--content'>
               <div className='content--game'>
                 <div className='game__title'>
                   <h5>Game</h5>
                 </div>
                 <div className='game__facebook'>
                   <div className='facebook'></div>
                 </div>
               </div>
               <div className='content--personal'>
                 <div className='personal__name'>
                   <div className='name__nick'> <h6>Verča</h6></div>
                   <div className='name__icon'>
                     <div className='github'></div>
                     <div className='linkedin'></div>
                   </div>
                 </div>
                 <div className='personal__name'>
                   <div className='name__nick'><h6>Barča</h6></div>
                   <div className='name__icon'>
                     <div className='github'></div>
                     <div className='linkedin'></div>
                   </div>
                 </div>
               </div>
             </div>
              
            </div>
        
        
        </div>      
              
            
             
    </>
  );
};
