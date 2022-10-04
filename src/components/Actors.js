import React from "react";
import { actors } from "../data";

function Actors() {
  const actorData = actors.map((e, index) => (
    <div key={index}>
      {e.name}
      <ul>
        <li>{e.movies}</li>
      </ul>
    </div>
  ))
  return <div>
    <h1>Actors Page</h1>
    {actorData}
  </div>;
}

export default Actors;
