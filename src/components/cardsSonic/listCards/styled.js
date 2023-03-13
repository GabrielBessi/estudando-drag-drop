import styled from "styled-components";

export const LiStyled = styled.li`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  background-color: white;
  border-radius: 10px;

  border: 2px solid black;

  /* box-sizing: content-box; */

  img {
    display: flex;

    border-radius: 10px;

    width: 170px;
    height: 170px;
  }

  span {
    font-weight: 600;
  }
`;

export const Wrapper = styled.div`
  background-color: ${({ isDraggingOver }) =>
    isDraggingOver ? "#DEEBFF" : "#B3D4FF"};
  display: flex;
  flex-direction: column;
  padding: ${8}px;
  user-select: none;
  transition: background-color 0.1s ease;
  margin: ${8}px 0;
`;

export const ContainerColuna = styled.div`
  /* flex child */
  flex-grow: 1;
  /*
  flex parent
  needed to allow width to grow greater than body
*/
  display: inline-flex;
`;

export const DropZone = styled.div`
  display: flex;
  /*
    Needed to avoid growth in list due to lifting the first item
    Caused by display: inline-flex strangeness
  */
  align-items: start;
  /* stop the list collapsing when empty */
  min-width: 600px;
  /* stop the list collapsing when it has no items */
  min-height: 60px;
`;
