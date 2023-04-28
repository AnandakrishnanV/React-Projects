import { useEffect, useState } from "react";
import "./App.css";
import Die from "./components/Die";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";


// Dots on dice
// Track rolls
// Track time
// Save Best time

function App() {
  const [dice, setDice] = useState(allNewDice());
  const [tenzies, setTenzies] = useState(false);

  useEffect(() => {
    const allHeld = dice.every((die) => die.isHeld);
    const ifGameOver = dice.every(
      (die, index, array) => die.value === array[0].value
    );

    allHeld && ifGameOver ? setTenzies(true) : setTenzies(false);
  }, [dice]);

  function generateNewDie() {
    return {
      value: Math.floor(Math.random() * 6) + 1,
      isHeld: false,
      id: nanoid(),
    };
  }

  function allNewDice() {
    return Array.from({ length: 10 }, () => generateNewDie());
  }

  function holdDice(id) {
    setDice((prevDice) =>
      prevDice.map((die) =>
        die.id === id ? { ...die, isHeld: !die.isHeld } : die
      )
    );
  }

  const dieElements = dice.map((die) => (
    <Die
      key={die.id}
      value={die.value}
      isHeld={die.isHeld}
      holdDice={() => holdDice(die.id)}
    ></Die>
  ));

  function rerollDice() {
    tenzies
      ? setDice(allNewDice())
      : setDice((prevDice) => {
          const newDice = prevDice.map((die) => {
            return die.isHeld ? die : generateNewDie();
          });
          return newDice;
        });
  }

  return (
    <main>
      {tenzies && <Confetti />}
      <h1 className="title">Tenzies</h1>
      <p className="instructions">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      <div className="dice-container">{dieElements}</div>
      <button className="button--roll" onClick={rerollDice}>
        {tenzies ? "New Game" : "Roll Me"}
      </button>
    </main>
  );
}

export default App;
