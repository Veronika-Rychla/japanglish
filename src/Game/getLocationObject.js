import { gameConfig } from './gameConfig';

export const getLocationObject = (location) => {
  return gameConfig.locations[location];
};
