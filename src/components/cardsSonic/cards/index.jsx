import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { ContaineGlobal } from "./styled";
import Linhas from "../listCards/index";

/**
{
    "draggableId": "7",
    "type": "CARD",
    "source": {
        "index": 2,
        "droppableId": "1"
    },
    "reason": "DROP",
    "mode": "FLUID",
    "destination": {
        "droppableId": "0",
        "index": 0
    },
    "combine": null
}
 */
function Cards({ lines, setLines }) {
  function handleOnDragEnd(linesResult) {
    if (!linesResult.destination) return;
    console.log(linesResult, lines);

    const destination = linesResult.destination;
    const source = linesResult.source;

    const reservaDestino = lines[destination.droppableId][destination.index];

    // coloca o source no destino que já foi reservado
    lines[destination.droppableId][destination.index] =
      lines[source.droppableId][source.index];

    lines[source.droppableId][source.index] = reservaDestino;

    // const items = Array.from(persons);
    // const [reorderedItem] = items.splice(result.source.index, 1);
    // items.splice(result.destination.index, 0, reorderedItem);

    console.log(linesResult, lines);
    setLines(lines);

    // // console.log(items);

    // const newArray = validatedArray(items);

    // setPersons(newArray);
  }

  // lines
  /**
   * { 
   *  0: [frame1, frame2],
   *  1: [fram3, frame 4]
   * }
   * 
   * > a = {
    ... key1: [1, 2, 3],
    ... key2: [2123, 452, 23]
    ... }
    { key1: [ 1, 2, 3 ], key2: [ 2123, 452, 23 ] }
    > Object.values(a)
    [ [ 1, 2, 3 ], [ 2123, 452, 23 ] ]
    > Object.keys(a)
    [ 'key1', 'key2' ]
    > array_keys = Object.keys(a)
    [ 'key1', 'key2' ]
    > array_keys[0]
    'key1'
    > a[array_keys[0]]
    [ 1, 2, 3 ]
    > 
   * 
   */

  function handleOnDragStart(style, snap) {
    console.log("--onBeforeCapture", style, snap);
  }

  console.log("--", Object.keys(lines));
  return lines ? (
    <DragDropContext
      onBeforeCapture={handleOnDragStart}
      onDragEnd={handleOnDragEnd}
    >
      <ContaineGlobal>
        {Object.keys(lines).map((key) => (
          <Linhas
            key={key}
            type="CARD"
            listId={key}
            colunas={lines[key]}
          ></Linhas>
        ))}
      </ContaineGlobal>
    </DragDropContext>
  ) : (
    <p>asdasd</p>
  );
}
export default Cards;
