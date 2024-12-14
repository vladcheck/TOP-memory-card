import { cards_data } from "./Cards";
import { CardSection } from "./components/CardSection";
import { HighScoreLabel } from "./components/HighScoreLabel";

function App() {
  return (
    <main>
      <header className="main-header">
        <h1>Memory game!</h1>
        <HighScoreLabel max_score={cards.length} />
      </header>
      <CardSection />
    </main>
  );
}

export default App;
