import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const CharacterItem = ({ url }) => {
  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios.get(url).then((res) => setCharacter(res.data));
  }, []);

  console.log(character);
  return (
    <div className="character-item">
      <div className="character-card">
        
        <h5><b>{character?.name}</b></h5>

        <img src={character.image} alt="" />

        <p><b>Place of Origin: </b>{character.origin?.name}</p>

        <p><b>Status: </b>{character.status}</p>

        <p><b>Episodes: </b>{character.episode?.length}</p>
      </div>
    </div>
  );
};

export default CharacterItem;
