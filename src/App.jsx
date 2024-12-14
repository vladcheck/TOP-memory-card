import { useState } from "react";
import { cards_data } from "./Cards";
import { Card } from "./components/Card";
import { CardSection } from "./components/CardSection";
import { HighScoreLabel } from "./components/HighScoreLabel";

const card_elements = cards_data.map((data) => <Card name={data.name} key={data.name} />);

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
  let [score, setScore] = useState(0);
  let [highScore, setHighScore] = useState(0);

  return (
    <main>
      <header className="main-header">
        <h1>Memory game!</h1>
        <HighScoreLabel high_score={highScore} max_score={cards_data.length} />
      </header>
      <CardSection>{randomize(card_elements)}</CardSection>
    </main>
  );
}

export default App;
