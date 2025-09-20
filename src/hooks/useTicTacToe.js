import { useEffect, useState } from "react";
import { calculateWinner, isDraw, isValidMove } from "../utils/gameLogic";

export function useTicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState(null);
  const [gameCount, setGameCount] = useState({ X: 0, O: 0, draws: 0 });

  const makeMove = (index) => {
    // 1. vérifier si le coup est valide
    if (!isValidMove(board, index) || winner) return;

    // 2. mettre à jour le plateau
    const newBoard = [...board];
    newBoard[index] = isXNext ? "X" : "0";

    // 3. mettre à jour les états
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null)); // réinitialise le plateau
    setIsXNext(true); // X commence toujours
    setWinner(null); // réinitialise le gagnant
  };

  useEffect(() => {
    // 1. vérifie s'il y a un gagnant
    const gameWinner = calculateWinner(board);

    if (gameWinner) {
      // 2. il y a un gagnant
      setWinner(gameWinner);
      setGameCount((prevCount) => ({
        ...prevCount,
        [gameWinner]: prevCount[gameWinner] + 1,
      }));
    } else if (isDraw(board)) {
      // 3. il y a une égalité
      setWinner("draw");
      setGameCount((prevCount) => ({
        ...prevCount,
        draws: prevCount.draws + 1,
      }));
    }
  }, [board]);

  return { board, isXNext, winner, gameCount, makeMove, resetGame };
}
