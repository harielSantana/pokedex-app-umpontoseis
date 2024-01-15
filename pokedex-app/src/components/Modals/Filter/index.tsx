import { Fragment } from "react";
import * as S from "./styles";
import FilterType from "@components/Filters/Types";

const FilterModal: React.FC = () => {
  return (
    <S.Container>
      <S.Title>Filters</S.Title>
      <S.Description>
        Use advanced search to explore Pokémon by type, weakness, height and
        more!
      </S.Description>

      <S.FilterContainer>
        <FilterType />
      </S.FilterContainer>
    </S.Container>
  );
};

export default FilterModal;
