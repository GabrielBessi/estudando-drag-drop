import { useState } from "react";
import "./App.css";
import frames from "./services/data";

function App() {
  const [cards, setCards] = useState(frames);
  const [firstColumn, setFirstColumn] = useState([]);
  const [secondColumn, setSecondColumn] = useState([]);
  const [thirdColumn, setThirdColumn] = useState([]);

  const orderArray = { 0: [] };

  function validatedArray(dataArray) {
    dataArray.forEach((elem) => {
      let key = "0";
      let returnTrueOrFalse = separateArray(elem, orderArray[key]);
      console.log(elem.width, key, returnTrueOrFalse);

      if (returnTrueOrFalse) {
        return;
      }

      key = String(Number(key) + 1);
      let mesa = orderArray[key];
      if (!mesa) orderArray[key] = mesa = [];

      returnTrueOrFalse = separateArray(elem, mesa);
      console.log(elem.width, key, returnTrueOrFalse);

      if (returnTrueOrFalse) {
        return;
      }

      key = String(Number(key) + 1);
      mesa = orderArray[key];
      if (!mesa) orderArray[key] = mesa = [];

      returnTrueOrFalse = separateArray(elem, mesa);
      console.log(elem.width, key, returnTrueOrFalse);

      if (returnTrueOrFalse) {
        return;
      }

      key = String(Number(key) + 1);
      mesa = orderArray[key];
      if (!mesa) orderArray[key] = mesa = [];

      returnTrueOrFalse = separateArray(elem, mesa);
      console.log(elem.width, key, returnTrueOrFalse);

      if (returnTrueOrFalse) {
        return;
      }

      key = String(Number(key) + 1);
      mesa = orderArray[key];
      if (!mesa) orderArray[key] = mesa = [];
      returnTrueOrFalse = separateArray(elem, mesa);

      if (returnTrueOrFalse) {
        return;
      }

      key = String(Number(key) + 1);
      mesa = orderArray[key];
      if (!mesa) orderArray[key] = mesa = [];
      returnTrueOrFalse = separateArray(elem, mesa);
    });

    console.log(orderArray);
  }

  function separateArray(elem, firstArray) {
    const widthContainer = firstArray.reduce((acc, prev) => {
      acc -= parseInt(prev.width);
      return acc;
    }, 90);

    if (parseInt(elem.width) <= widthContainer) {
      firstArray.push(elem);

      return true;
    }

    return false;
  }

  return <button onClick={() => validatedArray(cards)}>filtrar</button>;
}

export default App;
