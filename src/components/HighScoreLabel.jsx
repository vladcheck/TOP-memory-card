export function HighScoreLabel({ high_score, max_score }) {
  return (
    <header className="high-score-header">
      <h2>
        Your high score: {high_score}/{max_score}
      </h2>
    </header>
  );
}
