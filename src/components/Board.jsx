import "../styles/components/Board.css";
import { getWinningLine } from "../utils/gameLogic";
import { Square } from "./Square";

export function Board({ board, onSquareClick, winner }) {
  const winningLine = getWinningLine(board);
  return (
    <div className="board">
      {board.map((value, index) => (
        <Square
          key={index}
          value={board[index]}
          onClick={() => onSquareClick(index)}
          isWinning={winningLine.includes(index)}
        />
      ))}
    </div>
  );
}
