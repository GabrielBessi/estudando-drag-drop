import { Wrapper, Container, DropZone } from "./styled";
import { Droppable, Draggable } from "react-beautiful-dnd";
import ItemCard from '../item';

function ListCards({ key, listId, listType, mapQuotes }) {
    const isCombineEnabled = false;

    function renderBoard(dropProvided) {
        return (
            <Container>
                <DropZone ref={dropProvided.innerRef}>
                    {mapQuotes.map((quote, index) => (
                        <Draggable key={quote.id} draggableId={quote.id} index={index}>
                            {(
                                dragProvided,
                                dragSnapshot,
                            ) => (
                                <ItemCard
                                    author={quote}
                                    provided={dragProvided}
                                    snapshot={dragSnapshot}
                                />
                            )}
                        </Draggable>
                    ))}
                    {dropProvided.placeholder}
                </DropZone>
            </Container>
        )
    }
  return (
    <Droppable
        droppableId={listId}
        type={listType}
        direction="horizontal"
        isCombineEnabled={isCombineEnabled}
    >
        {(dropProvided, dropSnapshot) => (
            <Wrapper
                isDraggingOver={dropSnapshot.isDraggingOver}
                {...dropProvided.droppableProps}
            >
                {mapQuotes && renderBoard(dropProvided)}
            </Wrapper>
        )}

    </Droppable>
  );
}

export default ListCards;
