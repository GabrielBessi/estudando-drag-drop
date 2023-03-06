import styled from "styled-components";

export const LiStyled = styled.li`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  background-color: white;
  border-radius: 10px;

  border: 2px solid black;

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
