import React from 'react';

export const Conversation = (props) => {
  const { text, type } = props;
  return <div className="Conversation">{text}</div>;
};
