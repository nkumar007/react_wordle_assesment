import React from "react";
import {range} from "../../utils";
import {checkGuess} from "../../game-helpers";

function Guess({item, answer}) {
  const arr = checkGuess(item, answer);

  return (
    <div className="guess-results">
      <p className="guess">
        {range(5).map((num, index) => {
          // Conditional class assignment
          const className =
            arr && arr.length > 0 ? `cell ${arr[num].status}` : "cell";

          return (
            <span className={className} key={index}>
              {arr ? arr[num].letter : undefined}
            </span>
          );
        })}
      </p>
    </div>
  );
}

export default Guess;
