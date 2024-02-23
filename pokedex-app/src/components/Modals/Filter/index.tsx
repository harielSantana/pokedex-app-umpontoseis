import { CustomButton } from "@components/Button";
import FilterType from "@components/Filters/Types";

import * as S from "./styles";

import React from "react";

const FilterModal: React.FC = () => {
  return (
    <S.Container>
      <S.Title>Filters</S.Title>
      <S.Description>
        Use advanced search to explore Pokémon by type, weakness, height and
        more!
      </S.Description>

      <S.FilterContainer>
        <S.Subtitle>Type</S.Subtitle>
        <FilterType />

        <S.Subtitle>Weekness</S.Subtitle>
        <FilterType />

        <S.Subtitle>Heights</S.Subtitle>

        <S.Subtitle>Weights</S.Subtitle>

        <S.Subtitle>Number Range</S.Subtitle>
        <S.ButtonContainer>
          <CustomButton title="Reset" onPress={() => {}} type="secondary" />
          <CustomButton title="Apply" onPress={() => {}} type="primary" />
        </S.ButtonContainer>
      </S.FilterContainer>
    </S.Container>
  );
};

export default FilterModal;
