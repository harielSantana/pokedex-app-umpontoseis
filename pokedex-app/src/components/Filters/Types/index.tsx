import React, { useCallback, useState } from "react";
import { FlatList } from "react-native";
import * as S from "./styles";
import { typeToSvg } from "@utils/findPokemonByType";
import { IPokemonType } from "@components/Type/_types";

const SelectedType = ({
  type,
  isSelected,
}: {
  type: IPokemonType;
  isSelected: boolean;
}) => {
  const SvgComponent = typeToSvg[type] || null;
  return (
    <S.IconContainer type={type} key={type} isSelected={isSelected}>
      {SvgComponent && <SvgComponent />}
    </S.IconContainer>
  );
};

const FilterType: React.FC<{ defaultType?: any; onChangeType: (type: IPokemonType | undefined) => void }> = ({
  defaultType,
  onChangeType,
}) => {
  const [selectedType, setSelectedType] = useState<IPokemonType | undefined>(defaultType);

  const handleTypeChange = useCallback((type: IPokemonType | undefined) => {
    setSelectedType(type);
    onChangeType(type);
  }, [onChangeType]);

  const pokemon_types: IPokemonType[] = [
    "bug", "dark", "dragon", "electric", "fairy", "fighting", "fire", "flying",
    "ghost", "grass", "ground", "ice", "normal", "poison", "psychic", "rock", "steel", "water"
  ];

  return (
    <FlatList
      data={pokemon_types}
      keyExtractor={(item) => item}
      renderItem={({ item }) => (
        <S.Touchable onPress={() => handleTypeChange(item)}>
          <SelectedType type={item} isSelected={item === selectedType} />
        </S.Touchable>
      )}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    />
  );
};


export default FilterType;
