import React, { useReducer } from 'react';
import { useNavigate } from 'react-router-dom';

import { getConversation } from './getConversation';

const initialState = {
  currentLocation: 'Train station',
  conversationIndex: 0,
  currentHappiness: 50,
};

const gameReducer = (navigate) => (state, action) => {
  switch (action.type) {
    case 'moveToNextConversation':
      const nextLocation = getConversation(
        state.currentLocation,
        state.conversationIndex,
      ).nextLocation;
      if (nextLocation === '/credits') {
        navigate('/credits');
      }
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
    case 'increaseHappiness':
      if (state.currentHappiness === 100) return state;
      return {
        ...state,
        currentHappiness: state.currentHappiness + 25,
      };
    case 'decreaseHappiness':
      if (state.currentHappiness === -500) {
        navigate('/game-over');
        return state;
      }
      return {
        ...state,
        currentHappiness: state.currentHappiness - 25,
      };
    default:
      console.error('Invalid action ', { action, state });
      return state;
  }
};

export const useGameState = () => {
  const navigate = useNavigate();
  return useReducer(gameReducer(navigate), initialState);
};
