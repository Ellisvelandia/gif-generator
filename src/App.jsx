import { useState } from "react";
import "./App.css";
import AddCategory from "./components/AddCategory";
import DisplayGifs from "./components/DisplayGifs";

function App() {
  const [category, setCategory] = useState("");

  return (
    <div className="App">
      <h1>Gifs Generator App</h1>
      <AddCategory setCategory={setCategory} />
      <DisplayGifs category={category} />
    </div>
  );
}

export default App;
