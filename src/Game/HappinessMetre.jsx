import React from 'react';

import './HappinessMetre.css';

export const HappinessMetre = (props) => {
  const { happiness } = props;
  return (
    <div className="HappinessMetre" id="HappinessHeart">
      <img
        alt={`Happiness metre ${happiness}`}
        src={`/happinessMetre/heart${happiness}.png`}
        width={50}
        height={50}
      />
    </div>
  );
};
