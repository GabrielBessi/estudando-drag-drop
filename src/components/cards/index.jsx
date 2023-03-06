// import ListCards from "../listCards";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { CardStyle } from "./styled";
import { LiStyled } from "../listCards/styled";

function Cards({ persons, setPersons }) {

  function handleOnDragEnd(result){
    if (!result.destination) return

    const items = Array.from(persons)
    const [reorderedItem] = items.splice(result.source.index, 1)
    console.log(result.source.index)
    items.splice(result.destination.index, 0, reorderedItem)
    console.log(result.destination.index)

    setPersons(items)
  }
  
  return (
    <CardStyle>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="personagens" direction="horizontal">
          {(provided) => (
            <ul
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {persons.map(({ id, imagem, nome }, index) => {
                return (
                <Draggable key={id} draggableId={id} index={index}>
                  {(provided) => (
                    <LiStyled ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                      <img src={imagem} alt={nome} />
                      <span>{nome}</span>
                    </LiStyled>
                  )}
                </Draggable>
              )})}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </CardStyle>
  );
}

export default Cards;
