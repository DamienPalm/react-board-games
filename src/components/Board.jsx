import "../styles/Board.css";
import { Square } from "./Square";

export function Board({ board, onSquareClick, winner }) {
  return (
    <div className="board">
      {board.map((value, index) => (
        <Square
          key={index}
          value={board[index]}
          onClick={() => onSquareClick(index)}
          isWinning={false}
        />
      ))}
    </div>
  );
}
