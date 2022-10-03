import React from "react";
import CharacterItem from "./CharacterItem";

const Characters = ({ location }) => {
  return (
    <div>
      <div className="data-container">
        <li><b>Type: </b>{location.type}</li>
        <li><b>Dimension: </b>{location.dimension}</li>
        <li><b>Pupulation: </b>{location.residents?.length}</li>
      </div>

      <li className="character-container">
        {location?.residents?.map((resident) => (
          <CharacterItem url={resident} key={resident} />
        ))}
      </li>
    </div>
  );
};

export default Characters;
