import styled from "styled-components";

export const LiStyled = styled.li`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  background-color: white;
  border-radius: 10px;

  border: 2px solid black;
  /* width: ${(props) => props.width}; */

  /* box-sizing: content-box; */

  img {
    display: flex;

    border-radius: 10px;
    /* width: ${(props) => props.width}; */

    width: 170px;
    height: 170px;
  }

  span {
    font-weight: 600;
  }
`;

function Item({ name, imagem, provided, width }) {
  return (
    <LiStyled
      ref={(ref) => provided.innerRef(ref)}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
    >
      <img src={imagem} />
      <span> {name}</span>
    </LiStyled>
  );
}

export default Item;
