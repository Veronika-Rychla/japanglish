# Japanglish: Trip to Tokyo

Japanglish is a fun educative visual novel that uses a game engine of our own invention build in JavaScript and React and you’re free to use it for your visual novels. To make your own game, all you have to do is to put your own screenplay into gameConfig.js and swap assets.

## Setting up

Create four components that will become the main pages the app is made of. Intro.jsx contains the introductory information on how to play and introducing the story and the characters. Game.jsx contains the game logic. GameOver.jsx is a page that will appear should the player fail during gameplay. Credits is the final page when the player clears the game and features its creators.

### index.jsx

The only thing that the main index.jsx should contain is importing the Router.

### Router.jsx

Create a navigation tree out of four pages: Intro, Game, GameOver and Credits.

### Intro.jsx

Intro is made of what looks like three separate pages (first page, rules, introducing the characters) but it’s actually just one page with three divs that are being displayed depending on conditions within loadNext constant.

### GameOver.jsx and Credits.jsx

GameOver and Credits are simple pages linked to specific events when the player either fails the game or beats it.

### gameConfig.js

This is where you put your screenplay and links to assets. All game data is arranged into objects and arrays. Start with establishing locations and refer to their background images and music files. The conversation holds several keys: text itself, type of text (essential when it comes to quizzes), character (name) and mood (character’s picture with a specific mood). Indicate the right answer with correct: true. The last dialogue of every location leads to the next with nextLocation key.

## Accessing game data

### getLocationObject.js

Import the game data from gameConfig in order to use this component. This function returns locations out of gameConfig.js file.

### getConversation.js

Import the game data from gameConfig.js and getLocationObject.js in order to use this component. This function returns a conversation index out of gameConfig.js file.

### HappinessMetre.jsx

The happiness metre takes one prop named happiness and returns the corresponding image of the heart symbol based on the player’s current state.

### Character.jsx

This component takes props character (their name) and mood (the image which expresses their current emotion linked to the respective dialogue).

## Game logic

### Conversation.jsx

We need to take several props into consideration: text, type, options and dispatch. When the type of the text is quiz, the program has to evaluate whether the player answered right or wrong and link it to the happiness metre.

While the right answer dispatches the action increasing happiness and the wrong decreases it, they both move the story to the next conversation so that the player can’t keep guessing until they get it right.

The return part takes care of how the dialogue window is supposed to be structured and establishes handleAnswerClick function in case the dialogue shows test options. Use the method map for that. The floating green button in normal dialogues moves the player to the next conversation using dispatch.

### UseGameState.jsx

Set the starting point in the const initialState. In our game, the player starts at the train station with the initial happiness metre set to 50%. The game engine utilises useReducer which is an alternative to useState when you need to express conditions for complicated structures, especially when states depend on one another without the need for callbacks.

The parameters are state and action and we made use of switch/case statement conditional rendering in order to move between locations and to progress the dialogues. The constant nextLocation links to getConversation.js component and calls for the state of the current location and conversation index within that location.

Inject the navigate function so that the gameReducer can cause effects such as navigation to the credits page after the very last conversation and game-over page should the player run out of hearts. Then set up how the loss of heart is initialised. Happiness metre increases by 25% when the answer is right and decreased by 25% if the answer is wrong.

### Game.jsx

Import all components and use gameState as a hook to put the game rules together. The return part then returns everything that is supposed to appear on the screen: a unique background of each location, its music, a toolbar with the happiness metre, the restart button and the name of the current location, the character’s mood image and the dialogue text.
