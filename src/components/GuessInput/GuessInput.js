import React from "react";

function GuessInput({searchTerm, setSearchTerm, setItems, items}) {
  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        setItems([...items, searchTerm]);
        console.log({searchTerm});
        setSearchTerm("");
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        type="text"
        minLength={5}
        maxLength={5}
        id="guess-input"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value.toUpperCase())}
      />
    </form>
  );
}

export default GuessInput;
