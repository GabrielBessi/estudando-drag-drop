import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: ${({ isDraggingOver }) =>
          isDraggingOver ? '#DEEBFF' : '#B3D4FF'};
  display: flex;
  flex-direction: column;
  padding: ${8}px;
  user-select: none;
  transition: background-color 0.1s ease;
  margin: ${8}px 0;
`;

export const Container = styled.div`
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
