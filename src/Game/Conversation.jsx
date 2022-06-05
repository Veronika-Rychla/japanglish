import React from 'react';

import './Conversation.css';

export const Conversation = (props) => {
  const { text, type, options } = props;
  const isQuiz = type === 'quiz';

  return (
    <div className="Conversation">
      <div className="Conversation__text">{text}</div>
      {isQuiz && (
        <ul className="Conversation__quiz">
          {options.map((o) => (
            <li key={o.option} className="Conversation__quiz-option">
              {o.option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
