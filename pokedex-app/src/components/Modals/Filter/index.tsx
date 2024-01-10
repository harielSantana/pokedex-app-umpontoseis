import { Fragment } from "react";
import * as S from "./styles";

const FilterModal: React.FC = () => {
  return (
    <S.Container>
      <S.Title>Pokédex</S.Title>
      <S.Description>
        Use advanced search to explore Pokémon by type, weakness, height and
        more!
      </S.Description>
    </S.Container>
  );
};

export default FilterModal;
