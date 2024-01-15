import React from "react";
import * as S from "./styles";
import { typeToSvg } from "@utils/findPokemonByType";

const SelectedType = () => {
  const SvgComponent = typeToSvg["bug"] || null; // Usar BugTypeSvg como padrão se o tipo não for encontra
  return <S.IconContainer>{SvgComponent && <SvgComponent />}</S.IconContainer>;
};

const FilterType: React.FC = () => {
  return (
    <S.Container>
      <SelectedType />
    </S.Container>
  );
};

export default FilterType;
