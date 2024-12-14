import { useState } from "react";
import { cardsData } from "./Cards";
import { Card } from "./components/Card";
import { CardSection } from "./components/CardSection";
import { HighScoreHeader } from "./components/HighScoreHeader";
import { ScoreHeader } from "./components/ScoreHeader";
import { Footer } from "./components/Footer";

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

function didClickTwiceOnAny(clicked) {
  return Object.values(clicked).some((timesClicked) => timesClicked > 1);
}

function getClickTimesPerNameObject(cardsData) {
  return cardsData.reduce((acc, entry) => {
    acc[entry.name] = 0;
    return acc;
  }, {});
}

function updateHighScore(score, highScore) {
  return score > highScore ? score : highScore;
}

let highScore = 0;

function App() {
  let [score, setScore] = useState(0);
  let [clicked, setClicked] = useState(getClickTimesPerNameObject(cardsData));

  if (didClickTwiceOnAny(clicked)) {
    setScore(0);
    setClicked(getClickTimesPerNameObject(cardsData));
  } else {
    highScore = updateHighScore(score, highScore);
  }

  const card_elements = cardsData.map((data) => (
    <Card
      name={data.name}
      key={data.name}
      setScore={setScore}
      score={score}
      clicked={clicked}
      setClicked={setClicked}
    />
  ));

  return (
    <main>
      <header className="main-header">
        <ScoreHeader score={score} />
        <h1>Pokemon memory game!</h1>
        <HighScoreHeader high_score={highScore} max_score={cardsData.length} />
      </header>
      <CardSection>{randomize(card_elements)}</CardSection>
      <Footer />
    </main>
  );
}

export default App;
