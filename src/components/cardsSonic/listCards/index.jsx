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
            colunas.map(({ id, imagem, nome, width }, index) => (
              <Draggable id={id} key={id} draggableId={id} index={index}>
                {(provided, snapshot) => (
                  <div>
                    <Item
                      name={nome}
                      imagem={imagem}
                      provided={provided}
                      width={width}
                    />
                    {provided.placeholder}
                  </div>
                )}
              </Draggable>
            ))}
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
