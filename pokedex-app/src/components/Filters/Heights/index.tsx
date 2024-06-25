import React, { useState } from "react";
import { FlatList } from "react-native";
import * as S from "./styles";
import { IPokemonHeight } from "@components/Modals/Filter/_types";
import { heightToSVG } from "@utils/findPokemonByType";

const SelectedHeight = ({
  height,
  isSelected,
}: {
  height: IPokemonHeight;
  isSelected: boolean;
}) => {
  const SvgComponent = heightToSVG[height] || null;
  return (
    <S.IconContainer height={height} key={height} isSelected={isSelected}>
      {SvgComponent && <SvgComponent />}
    </S.IconContainer>
  );
};

const FilterHeight: React.FC<{ defaultHeight?: any; onChangeHeight: (height: IPokemonHeight | undefined) => void }> = ({
  defaultHeight,
  onChangeHeight,
}) => {
  const [selectedHeight, setSelectedHeight] = useState<IPokemonHeight | undefined>(
    defaultHeight
  );

  const handleHeightChange = (height: IPokemonHeight | undefined) => {
    setSelectedHeight(height);
    onChangeHeight(height);
  };

  const pokemon_heights: IPokemonHeight[] = ["short", "medium", "tall"];

  return (
    <FlatList
      data={pokemon_heights}
      keyExtractor={(item) => item}
      renderItem={({ item }) => (
        <S.Touchable onPress={() => handleHeightChange(item)}>
          <SelectedHeight height={item} isSelected={item === selectedHeight} />
        </S.Touchable>
      )}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default FilterHeight;
