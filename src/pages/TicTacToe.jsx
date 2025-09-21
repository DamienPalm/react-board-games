import { Board } from "../components/Board";
import { ScoreBoard } from "../components/ScoreBoard";
import { useTicTacToe } from "../hooks/useTicTacToe";
import "../styles/pages/TicTacToe.css";

export function TicTacToe() {
  const { board, isXNext, winner, gameCount, makeMove, resetGame } =
    useTicTacToe();

  const getStatusMessage = () => {
    if (winner === "draw") {
      return "🤝 Match nul !";
    }

    if (winner) {
      return `🎉 ${winner} a gagné !`;
    }

    return `🎯 Tour de ${isXNext ? "X" : "O"}`;
  };

  return (
    <main className="tictactoe">
      <h1 className="tictactoe__title">Le Morpion de la Muerte</h1>
      <p className="tictactoe__status">{getStatusMessage()}</p>
      <Board board={board} onSquareClick={makeMove} winner={winner} />
      <button className="tictactoe__reset-button" onClick={resetGame}>
        Nouvelle partie
      </button>
      <ScoreBoard gameCount={gameCount} />
    </main>
  );
}
