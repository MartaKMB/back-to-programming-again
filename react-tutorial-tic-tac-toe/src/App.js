import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>Tutorial: Tic Tac Toe</header>
      <Board />
    </div>
  );
}

function Square() {
  const [value, setValue] = useState(null);
  function handleClick() {
    setValue("X");
    console.log("clicked!");
  }

  return (
    <button className="square" onClick={handleClick}>
      {value}
    </button>
  );
}

function Board() {
  return (
    <>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
}

export default App;
