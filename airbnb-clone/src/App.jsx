import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";

import data from "./airbnb-data";

function App() {
  const [count, setCount] = useState(0);

  const card_data = data.map((item) => {
    return (
      <Card
        key={item.id}
        item={item}
      />
    );
  });

  return (
    <div>
      <Navbar />
      <Hero />
      <section className="cards-list">{card_data}</section>
    </div>
  );
}

export default App;
