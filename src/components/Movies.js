import React from "react";
import { movies } from "../data";

function Movies() {
  const movieData = movies.map((e, index) => (
    <div key={index}>
      {e.title}
      {e.time}
      <ul>
        <li>{e.genres}</li>
      </ul>
    </div>
  ))
  
  
  return <div>
    <h1>Movies Page</h1>
    {movieData}
  </div>;
}

export default Movies;
