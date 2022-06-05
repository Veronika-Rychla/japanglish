import { getLocationObject } from './getLocationObject';
import { gameConfig } from './gameConfig';

export const getConversation = (location, conversationIndex) => {
  return getLocationObject(location).conversation[conversationIndex];
};
