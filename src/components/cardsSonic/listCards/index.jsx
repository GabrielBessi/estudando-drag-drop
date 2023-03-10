import { Draggable, Droppable } from "react-beautiful-dnd";
import Item from "../item/index";
import { Wrapper, ContainerColuna, DropZone } from "./styled";

// Droppable = linha

function Linhas({ type, listId, colunas }) {
  console.log("--- ");

  function renderBoard(providedLinha) {
    return (
      <ContainerColuna>
        <DropZone ref={providedLinha.innerRef}>
          {colunas &&
            colunas.map((item, index) =>
              item && item.id ? (
                <Draggable
                  id={index}
                  key={item.id}
                  draggableId={item.id}
                  index={index}
                >
                  {(provided, snapshot) => (
                    <div>
                      <Item
                        name={item.nome}
                        imagem={item.imagem}
                        provided={provided}
                        width={item.width}
                      />
                      {provided.placeholder}
                    </div>
                  )}
                </Draggable>
              ) : null
            )}
        </DropZone>
      </ContainerColuna>
    );
  }

  return type ? (
    <Droppable droppableId={listId} type={type} direction="horizontal">
      {(provided, snapshot) => (
        <Wrapper {...provided.droppableProps}>
          {colunas && renderBoard(provided)}
        </Wrapper>
      )}
    </Droppable>
  ) : (
    <></>
  );
}

export default Linhas;
