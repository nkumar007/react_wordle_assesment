import React from "react";

import {sample} from "../../utils";
import {WORDS} from "../../data";
import {NUM_OF_GUESSES_ALLOWED} from "../../constants";
import {range} from "../../utils";
import GuessInput from "../GuessInput/GuessInput";
import Guess from "../Guess/Guess";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({answer});

function Game() {
  const [items, setItems] = React.useState([]);

  function handleInput(input) {
    setItems([...items, input]);
  }

  return (
    <>
      {range(NUM_OF_GUESSES_ALLOWED).map((num, index) => (
        <Guess item={items[num]} key={index} answer={answer} />
      ))}
      <GuessInput handleInput={handleInput} />
    </>
  );
}

export default Game;
