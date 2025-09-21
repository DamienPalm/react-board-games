import "../styles/Square.css";

export function Square({ value, onClick, isWinning }) {
  return (
    <button
      className={`square__button ${isWinning ? "square__button--winning" : ""}`} // Toujours la classe de base puis le modificateur
      onClick={onClick}
    >
      {value}
    </button>
  );
}
