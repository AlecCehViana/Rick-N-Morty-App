import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Characters from "./Characters";
import BgImage from '../assets/videoplayback.mp4'

const Location = () => {
  const [location, setLocation] = useState({});
  const [typeLocation, setTypeLocation] = useState("");
  const randomLocation = Math.floor(Math.random() * 126) + 1;

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/location/${randomLocation}/`)
      .then((res) => setLocation(res.data));
  }, []);
  console.log(location);

  const getLocation = () => {
    axios
      .get(`https://rickandmortyapi.com/api/location/${typeLocation}/`)
      .then((res) => setLocation(res.data));
  };
  return (
    <div>
     

      <div className="main-container">
        <h1><b>{location?.name}</b></h1>

        <div className="input-group mb-3">
          <input
            type="text"
            value={typeLocation}
            onChange={(e) => setTypeLocation(e.target.value)}
            className="form-control"
            placeholder=""
            aria-label="Example text with button addon"
            aria-describedby="button-addon1"
          />
          <button
            onClick={getLocation}
            className="btn btn-outline-secondary"
            type="button"
            id="button-addon1"
          >
            Get Location
          </button>

        </div>
      
      </div>

      <Characters location={location} />
    </div>
  );
};

export default Location;
