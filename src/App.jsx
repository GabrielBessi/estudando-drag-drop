import { useState } from "react";
import "./App.css";
import Cards from "./components/cards/index";
import { ArrayImages } from "./services";

function App() {
  const [persons, setPersons] = useState(ArrayImages);

  return (
    <div className="App">
      <Cards persons={persons} setPersons={setPersons}/>
    </div>
  );
}

export default App;
