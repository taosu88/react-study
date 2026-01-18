import { useState } from "react";
function S({ value, onSClick }) {
  return (
    <button className="square" onClick={onSClick}>
      {value}
    </button>
  );
}
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
export default function B() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));
  function handleClick(i) {
    if (squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "a";
    } else {
      nextSquares[i] = "b";
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }
  return (
    <>
      <div className="board-row">
        <S value={squares[0]} onSClick={() => handleClick(0)} />
        <S value={squares[1]} onSClick={() => handleClick(1)} />
        <S value={squares[2]} onSClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <S value={squares[3]} onSClick={() => handleClick(3)} />
        <S value={squares[4]} onSClick={() => handleClick(4)} />
        <S value={squares[5]} onSClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <S value={squares[6]} onSClick={() => handleClick(6)} />
        <S value={squares[7]} onSClick={() => handleClick(7)} />
        <S value={squares[8]} onSClick={() => handleClick(8)} />
      </div>
    </>
  );
}
