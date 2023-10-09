import React from "react";

function GuessResults({items}) {
  return (
    <div className="guess-results">
      {items.map((item, index) => (
        <p className="guess" key={index}>
          {item}
        </p>
      ))}
    </div>
  );
}

export default GuessResults;
