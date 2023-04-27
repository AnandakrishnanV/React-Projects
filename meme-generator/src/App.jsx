import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import MainForm from "./components/MainForm";

function App() {
  const [count, setCount] = useState(0);

  return <div>
    <Header />
    <MainForm />
  </div>;
}

export default App;
