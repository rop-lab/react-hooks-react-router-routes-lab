import React from "react";
import { directors } from "../data";

function Directors() {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map((director, index) => (
        <div key={`${director.id}-${index}`}>
          <h2>{director.name}</h2>
          <ul>
            {director.movies.map((movie, movieIndex) => (
              <li key={`${director.id}-${movieIndex}`}>{movie}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Directors;
