import { CustomButton } from "@components/Button";
import FilterType from "@components/Filters/Types";
import * as S from "./styles";
import React from "react";
import FilterHeight from "@components/Filters/Heights";

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
        <FilterType defaultType="fire" />

        <S.Subtitle>Weakness</S.Subtitle>
        <FilterType defaultType="water" />

        <S.Subtitle>Heights</S.Subtitle>
        <FilterHeight defaultHeight="medium" />

        <S.Subtitle>Weights</S.Subtitle>
        {/* Add your weights filter component here */}

        <S.Subtitle>Number Range</S.Subtitle>
        {/* Add your number range filter component here */}

        <S.ButtonContainer>
          <CustomButton title="Reset" onPress={() => {}} type="secondary" />
          <CustomButton title="Apply" onPress={() => {}} type="primary" />
        </S.ButtonContainer>
      </S.FilterContainer>
    </S.Container>
  );
};

export default FilterModal;
