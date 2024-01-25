// screens/HomeScreen.tsx

import React, { useEffect, useState } from "react";
import * as S from "./styles";
import { useRoute } from "@react-navigation/native";
import { api } from "../../services/api/index";
import { useTheme } from "styled-components/native";

interface Stat {
  base_stat: number;
  stat: {
    name: string;
  };
}

interface Ability {
  ability: {
    name: string;
  };
}

interface PokemonProps {
  id: number;
  name: string;
  stats: Stat[];
  abitilies: Ability[];
  color: string;
}

export const DescriptionScreen: React.FC = () => {
  const { type } = useTheme();

  const route = useRoute();
  const { pokemonId } = route.params as { pokemonId: number };

  const [isLoading, setIsLoading] = useState(true);
  const [pokemon, setPokemon] = useState({} as PokemonProps);

  async function getPokemonDetails(pokemonId: number): Promise<Request> {
    try {
      const response = await api.get(`pokemon/${pokemonId}`);
      const { id, name, types, abilities, stats } = response.data;

      const pokemonType = types[0].type.name;
      const backgroundColor = type[pokemonType];

      console.log(abilities);

      return;
    } catch (err) {
      throw new Error(err);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    if (typeof pokemonId === "number") {
      getPokemonDetails(pokemonId);
    }
  }, [pokemonId]);

  return <S.Container></S.Container>;
};
