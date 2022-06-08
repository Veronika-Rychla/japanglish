import React from 'react';

import './Conversation.css';

export const Conversation = (props) => {
  const { text, type, options, dispatch } = props;
  const isQuiz = type === 'quiz';

  const handleAnswerClick = (isCorrect) => {
    if (isCorrect) {
      dispatch({ type: 'increaseHappiness' });
      dispatch({ type: 'moveToNextConversation' });
    } else {
      dispatch({ type: 'decreaseHappiness' });
      dispatch({ type: 'moveToNextConversation' });
    }
  };

  return (
    <div className="Conversation">
      <div className="Conversation__text">{text}</div>
      {isQuiz && (
        <ul className="Conversation__quiz">
          {options.map((o) => (
            <li
              key={o.option}
              className="Conversation__quiz-option"
              onClick={() => handleAnswerClick(o.correct)}
            >
              {o.option}
            </li>
          ))}
        </ul>
      )}
      {!isQuiz && (
        <div
          className="Conversation__button"
          onClick={() => {
            dispatch({ type: 'moveToNextConversation' });
          }}
        >
          <div className="Conversation__button-arrow"></div>
        </div>
      )}
    </div>
  );
};
