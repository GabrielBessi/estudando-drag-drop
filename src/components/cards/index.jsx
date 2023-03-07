import { DragDropContext } from "react-beautiful-dnd";
import { Root } from "./styled";
import { useState } from "react";
import ListCards from "../listCards";


const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const reorderQuoteMap = ({ quoteMap, source, destination }) => {
  console.log("---", quoteMap, source, destination)
  const current = [...quoteMap[source.droppableId]];
  const next = [...quoteMap[destination.droppableId]];
  const target = current[source.index];

  // moving to same list
  if (source.droppableId === destination.droppableId) {
    const reordered = reorder(
        current,
        source.index,
        destination.index,
    );
    const result = {
      ...quoteMap,
      [source.droppableId]: reordered,
    };
    return {
      quoteMap: result,
    };
  }

  // moving to different list

  // remove from original
  current.splice(source.index, 1);
  // insert into next
  next.splice(destination.index, 0, target);

  const result = {
    ...quoteMap,
    [source.droppableId]: current,
    [destination.droppableId]: next,
  };

  return {
    quoteMap: result,
  };
};


function Cards({ initial }) {

  const [quoteMap, setQuoteMap] = useState(initial)

  function onDragEnd(result) {
    if (!result.destination) return;

    const resultt = reorderQuoteMap({
      quoteMap: quoteMap,
      source: result.source,
      destination: result.destination,
    })
    setQuoteMap(resultt.quoteMap)
  }

  return (
      <DragDropContext
          onDragEnd={onDragEnd}
      >
        <Root>
          {
            Object.keys(quoteMap).map((key) => (<ListCards
                  key={key}
                  listId={key}
                  listType="CARD"
                  mapQuotes={quoteMap[key]}
              />))
          }

        </Root>
      </DragDropContext>
  );
}
export default Cards;
