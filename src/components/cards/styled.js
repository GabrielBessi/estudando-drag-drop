import styled from "styled-components";

export const CardStyle = styled.section`
  max-width: 750px;

  height: 500px;
  width: 800px;

  background-color: #d6d6d6;

  ul {

    display: grid;
    grid-template-columns: repeat(4, auto);
    padding: 20px;

    flex-wrap: wrap;
    gap: 10px;
    
    overflow-x: hidden ;

  }
`;
