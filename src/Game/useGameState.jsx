import React, { useReducer } from 'react';

import { getConversation } from './getConversation';

const initialState = {
  currentLocation: 'Train station',
  conversationIndex: 0,
};

const gameReducer = (state, action) => {
  switch (action.type) {
    case 'moveToNextConversation':
      const nextLocation = getConversation(
        state.currentLocation,
        state.conversationIndex,
      ).nextLocation;

      if (nextLocation) {
        return {
          ...state,
          currentLocation: nextLocation,
          conversationIndex: 0,
        };
      }

      return {
        ...state,
        conversationIndex: state.conversationIndex + 1,
      };

    default:
      console.error('Invalid action ', { action, state });
      return state;
  }
};

export const useGameState = () => {
  return useReducer(gameReducer, initialState);
};
