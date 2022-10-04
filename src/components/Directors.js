import React from "react";
import { directors } from "../data";

function Directors() {
  const directorData = directors.map((e, index) => (
    <div key={index}>
      {e.name}
      <ul>
        <li>{e.movies}</li>
      </ul>
    </div>
  ))
  
  return <div>
    <h1>Directors Page</h1>
    {directorData}
    </div>;
}

export default Directors;
