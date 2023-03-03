import ListCards from "../listCards";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { CardStyle } from "./styled";
import { ArrayImages } from "../../services";

function Cards() {
  return (
    <CardStyle>
      <DragDropContext>
        <Droppable droppableId="personagens">
          {(provided) => (
            <ul
              className="personagens"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {ArrayImages.map(({ id, imagem, nome }, index) => (
                <Draggable key={id} draggableId={`${id}`} index={index}>
                  {(provided) => (
                    <ListCards
                      imagem={imagem}
                      nome={nome}
                      ref_1={provided.innerRef}
                      ref_2={provided.draggableProps}
                      ref_3={provided.dragHandleProps}
                    />
                  )}
                </Draggable>
              ))}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </CardStyle>
  );
}

export default Cards;
