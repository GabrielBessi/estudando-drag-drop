
import styled from "styled-components";
import React from ".";

const Avatar = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  flex-shrink: 0;
  margin-right: ${8}px;
  border-color: ${({ isDragging }) => (isDragging ? '#E3FCEF' : "#FFFFFF")};
  border-style: solid;
  border-width: ${8}px;
  box-shadow: ${({ isDragging }) =>
    isDragging ? "2px 2px 1px #6B778C" : 'none'};

  &:focus {
    /* disable standard focus color */
    outline: none;

    /* use our own awesome one */
    border-color: ${({ isDragging }) =>
    isDragging ? "#E3FCEF" : "#2684FF"};
  }
`;

function ItemCard({ author, provided, snapshot }) {
    const isCombineEnabled = false;

    return (
        <Avatar
            ref={(ref) => provided.innerRef(ref)}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            src={author.imagem}
            alt={author.nome}
            isDragging={snapshot.isDragging}
        />
    );
}

export default ItemCard;
