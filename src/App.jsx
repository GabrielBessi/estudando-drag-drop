import { useState, useEffect } from "react";
import Cards from "./components/cardsSonic/cards";
import { ArrayImages } from "./services";
import "./App.css";

function App() {
  const [lineColumn, setListColumn] = useState(validatedArray(ArrayImages));

  function validatedArray(dataArray) {
    const line = { 0: [] };
    dataArray.forEach((elem) => {
      let key = "0";
      let returnTrueOrFalse = separateArray(elem, line[key]);

      for (let i = 0; i < dataArray.length; i++) {
        if (returnTrueOrFalse) {
          return;
        }

        key = String(Number(key) + 1);
        let mesa = line[key];
        if (!mesa) line[key] = mesa = [];

        returnTrueOrFalse = separateArray(elem, mesa);
      }
    });
    return line;
  }

  function separateArray(elem, firstArray) {
    const widthContainer = firstArray.reduce((acc, prev) => {
      acc -= parseInt(prev.width);
      return acc;
    }, 800);
    console.log(widthContainer);

    if (parseInt(elem.width) <= widthContainer) {
      firstArray.push(elem);

      return true;
    }

    return false;
  }

  return (
    <div>
      <Cards lines={lineColumn} setLines={setListColumn} />
    </div>
  );
}

export default App;
