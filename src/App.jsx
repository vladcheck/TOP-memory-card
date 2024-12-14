import { cards_data } from "./Cards";
import { Card } from "./components/Card";
import { CardSection } from "./components/CardSection";
import { HighScoreLabel } from "./components/HighScoreLabel";

function randomize(cards) {
  const indexes_buffer = [],
    randomized_indexes = [],
    randomized_cards = [];
  for (let i = 0; i < cards.length; i++) {
    indexes_buffer.push(i);
  }
  while (indexes_buffer.length > 0) {
    const random_index = Math.floor(Math.random() * indexes_buffer.length);
    randomized_indexes.push(indexes_buffer.splice(random_index, 1));
  }
  for (let index of randomized_indexes) {
    randomized_cards.push(cards[index]);
  }
  return randomized_cards;
}

function App() {
  return (
    <main>
      <header className="main-header">
        <h1>Memory game!</h1>
        <HighScoreLabel max_score={cards_data.length} />
      </header>
      <CardSection>
        {randomize(cards_data).map((data) => (
          <Card key={data.name} name={data.name} />
        ))}
      </CardSection>
    </main>
  );
}

export default App;
