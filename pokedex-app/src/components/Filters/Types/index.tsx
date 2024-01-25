import React from "react";
import { FlatList } from "react-native";
import * as S from "./styles";
import { typeToSvg } from "@utils/findPokemonByType";
import { IPokemonType } from "@components/Type/_types";

const SelectedType = ({ type }: { type: IPokemonType }) => {
  const SvgComponent = typeToSvg[type] || null;
  return (
    <S.IconContainer type={type} key={type}>
      {SvgComponent && <SvgComponent />}
    </S.IconContainer>
  );
};

const FilterType: React.FC = () => {
  const pokemon_types: IPokemonType[] = [
    "bug",
    "dark",
    "dragon",
    "electric",
    "fairy",
    "fighting",
    "fire",
    "flying",
    "ghost",
    "grass",
    "ground",
    "ice",
    "normal",
    "poison",
    "psychic",
    "rock",
    "steel",
    "water",
  ];

  return (
    <FlatList
      data={pokemon_types}
      keyExtractor={(item) => item}
      renderItem={({ item }) => <SelectedType type={item} />}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default FilterType;
