import { useNavigation } from "@react-navigation/native";
import React from "react";
import InitialImage from "../../assets/images/dots.png";
import { Pokemon } from "../../screens/Home/_types";
import PokemonType from "../Type";
import * as S from "./styles";

interface CardProps {
  value: Pokemon;
}

const Card: React.FC<CardProps> = (value) => {
  const pokemon = value.value;
  const navigation = useNavigation();

  const handleCardPress = (pokemonId: number) => {
    navigation.navigate("description", { pokemonId });
  };

  return (
    <S.PokemonCard
      type={pokemon.types[0].type.name}
      onPress={() => handleCardPress(pokemon.id)}
    >
      <S.Initial>
        <S.CardId>#0{pokemon.id}</S.CardId>
        <S.Name>{pokemon.name}</S.Name>
        <S.InitialImage source={InitialImage} />
        <S.PokemonTypeContainer>
          {pokemon.types.map((type) => (
            <PokemonType key={type.slot} type={type.type.name} />
          ))}
        </S.PokemonTypeContainer>
      </S.Initial>
      <S.LastImage>
        <S.PokemonImage
          source={{
            uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`,
          }}
        />
      </S.LastImage>
    </S.PokemonCard>
  );
};

export default Card;
