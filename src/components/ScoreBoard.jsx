import "../styles/ScoreBoard.css";

export function ScoreBoard({ gameCount }) {
  return (
    <section className="scoreboard">
      <div className="scoreboard__item">
        <div className="scorebord__item__player">X</div>
        <div className="scoreboard__item__score">{gameCount.X}</div>
      </div>
      <div className="scoreboard__item">
        <div className="scorebord__item__player">Nuls</div>
        <div className="scoreboard__item__score">{gameCount.draws}</div>
      </div>
      <div className="scoreboard__item">
        <div className="scorebord__item__player">O</div>
        <div className="scoreboard__item__score">{gameCount.O}</div>
      </div>
    </section>
  );
}
