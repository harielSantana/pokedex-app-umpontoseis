// SelectedHeight.tsx
import React from "react";
import * as S from "./styles";
import { IPokemonHeight } from "@components/Modals/Filter/_types";
import { heightToSVG } from "@utils/findPokemonByType";

interface SelectedHeightProps {
  height: IPokemonHeight;
  isSelected: boolean;
}

const SelectedHeight: React.FC<SelectedHeightProps> = ({
  height,
  isSelected,
}) => {
  const SvgComponent = heightToSVG[height] || null;
  return (
    <S.IconContainer height={height} isSelected={isSelected}>
      {SvgComponent && <SvgComponent />}
    </S.IconContainer>
  );
};

export default SelectedHeight;
