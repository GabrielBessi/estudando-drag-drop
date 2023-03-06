import styled from "styled-components";

export const CardStyle = styled.section`

  height: 500px;
  width: 800px;

  background-color: #d6d6d6;
  /* overflow-x: auto; */

  ul {
    display: flex;

    flex-wrap: wrap;
    /* grid-template-columns: repeat(7, auto); */
    gap: 10px;

    /* display: grid;
   grid-template-columns: repeat(3, 1fr);
   grid-column-gap: 10px;
   grid-row-gap: 1em; */
  }
`;
