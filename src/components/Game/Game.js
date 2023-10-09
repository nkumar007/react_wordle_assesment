import React from "react";

import {sample} from "../../utils";
import {WORDS} from "../../data";
import GuessInput from "../GuessInput/GuessInput";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({answer});

function Game() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [items, setItems] = React.useState([]);

  return (
    <>
      <GuessInput
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        setItems={setItems}
        items={items}
      />
    </>
  );
}

export default Game;
