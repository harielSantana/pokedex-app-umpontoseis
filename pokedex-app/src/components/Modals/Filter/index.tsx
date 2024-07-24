import { CustomButton } from "@components/Button";
import FilterType from "@components/Filters/Types";
import * as S from "./styles";
import React, { useContext, useCallback } from "react";
import FilterHeight from "@components/Filters/Heights";
import { useAppContext } from "../../../context/AppContext";


const FilterModal: React.FC = () => {
  const { filters, setFilters } = useAppContext(); // Consuma o contexto

  // Exemplos de funções para atualizar os filtros globais
  const handleTypeChange = useCallback((type: any | undefined) => {
    setFilters({ ...filters, type });
  }, [filters, setFilters]);

  const handleWeaknessChange = useCallback((weakness: any  | undefined) => {
    setFilters({ ...filters, weakness });
  }, [filters, setFilters]);

  const handleHeightChange = useCallback((height: any | undefined) => {
    setFilters({ ...filters, height: height });
  }, [filters, setFilters]);

  const handleResetFilters = useCallback(() => {
    setFilters({ type: "bug", weakness: "bug", height: "medium" }); // Lógica para resetar os filtros
  }, [setFilters]);

  const handleApplyFilters = useCallback(() => {

  }, []);

  return (
    <S.Container>
      <S.Title>Filters</S.Title>
      <S.Description>
        Use advanced search to explore Pokémon by type, weakness, height and
        more!
      </S.Description>

      <S.FilterContainer>
        <S.Subtitle>Type</S.Subtitle>
        <FilterType defaultType={filters.type} onChangeType={handleTypeChange} />

        <S.Subtitle>Weakness</S.Subtitle>
        <FilterType defaultType={filters.weakness} onChangeType={handleWeaknessChange} />

        <S.Subtitle>Heights</S.Subtitle>
        <FilterHeight defaultHeight={filters.height} onChangeHeight={handleHeightChange} />

        {/* Adicione seus componentes de filtro restantes aqui conforme necessário */}

        <S.ButtonContainer>
          <CustomButton title="Reset" onPress={handleResetFilters} type="secondary" />
          <CustomButton title="Apply" onPress={handleApplyFilters} type="primary" />
        </S.ButtonContainer>
      </S.FilterContainer>

    </S.Container>
  );
};

export default FilterModal;
