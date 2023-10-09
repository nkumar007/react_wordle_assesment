import React from "react";
import {range} from "../../utils";

function Guess({item}) {
  return (
    <div className="guess-results">
      <p className="guess">
        {range(5).map((num, index) => (
          <span className="cell" key={index}>
            {item ? item[num] : undefined}
          </span>
        ))}
      </p>
    </div>
  );
}

export default Guess;
