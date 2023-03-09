import { LiStyled } from "./styled";

function ListCards({ imagem, nome, ref_1, ref_2, ref_3 }) {
  return (
    <LiStyled ref={ref_1} {...ref_2} {...ref_3}>
      <img src={imagem} alt={nome} />
      <span>{nome}</span>
    </LiStyled>
  );
}

export default ListCards;
