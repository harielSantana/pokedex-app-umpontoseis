// screens/HomeScreen.tsx

import { Feather } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Alert, ScrollView, Text } from "react-native";
import { useTheme } from "styled-components/native";
import circle from '../../assets/images/circle.png';
import { api } from "../../services/api/index";

import { FadeAnimation } from "@components/FadeAnimation";
import { PokemonProps } from "./interface";
import * as S from './styles';


export const DescriptionScreen: React.FC = () => {
  const { type } = useTheme();
  const route = useRoute();
  const {goBack} = useNavigation();
  const { pokemonId } = route.params as { pokemonId: number };

  const [pokemon, setPokemon] = useState({} as PokemonProps);
  const [loading, setLoading] = useState(true)

  async function getPokemonDetails(pokemonId: number) {
    try {
      const response = await api.get(`pokemon/${pokemonId}`);
      const { id, name, types, abilities, stats } = response.data;

      const pokemonType = types[0].type.name;
      const backgroundColor = type[pokemonType];


      console.log("Pokemon Type: " + pokemonType);
      console.log("Background Color: " + backgroundColor);

      setPokemon({
        id,
        name,
        types,
        abilities,
        stats,
        color: backgroundColor,
      });

    } catch (err) {
      Alert.alert('Algo deu errado', 'Não foi possível carregar os detalhes do pokémon')
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (typeof pokemonId === "number") {
      getPokemonDetails(pokemonId);
    }
  }, [pokemonId]);

  function handleGoBack(){
    goBack();
  }

  return (
    <>
      {loading ? <><Text>Carregando</Text></> :  <ScrollView style={{ flex: 1}}>
      <S.Header type={pokemon.types[0].type.name}>
        <S.BackButton onPress={handleGoBack}>
          <Feather name="chevron-left" size={24} color="#FFF"/>
        </S.BackButton>

          <FadeAnimation>
            <S.ContentImage>
              <S.CircleImage source={circle} />
              <S.PokemonImage
              source={{
                uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`,
              }}
              />
            </S.ContentImage>
          </FadeAnimation>

      </S.Header>
    </ScrollView>}
    </>
  )
};
