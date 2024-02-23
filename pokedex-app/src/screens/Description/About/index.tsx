import { Detail } from "@components/Detail"
import { Foundation } from "@expo/vector-icons"
import React from "react"
import { View } from "react-native"
import { PokemonProps } from "../interface"
import * as S from './styles'

interface AboutProps {
  type: any
  pokemon: PokemonProps
}

export const About: React.FC<AboutProps> = ({type, pokemon}: AboutProps) => {
  function FindPercentage(probabilidade: number): number {
    if (probabilidade === -1) {
        return 0; // Para Pokémon sem gênero
    } else {
        return probabilidade * 100 / 8; // Calcula a porcentagem
    }
  }

  return (
    <S.Container>
      <S.DescriptionText>{pokemon.description}</S.DescriptionText>
      <S.Title type={type}>Pokedex Data</S.Title>

      <Detail
        title="Species"
        detail={pokemon.pokemonData.species}
      />

      <Detail
        title="Height"
        detail={pokemon.pokemonData.height}
      />

      <Detail
        title="Weight"
        detail={pokemon.pokemonData.weight}
      />

      <Detail
        title="Abilities"
        detail={pokemon.abilities as any}
        />

    <S.Title type={type}>Training</S.Title>
      <Detail
        title="EV Yield"
        detail={`${pokemon.pokemonData.height}`}
      />

      <Detail
        title="Catch Rate"
        detail={`${pokemon.pokemonData.capture_rate} (${pokemon.pokemonData.capture_rate * 13 / 100}% with Pokeball, full HP )`}
      />

      <Detail
        title="Base Friendship"
        detail={pokemon.pokemonData.id}
      />

      <Detail
        title="Base Exp"
        detail={pokemon.pokemonData.base_experience}
      />

      <Detail
        title="Growth Rate"
        detail="Medium Slow"
      />

      <S.Title type={type}>Breeding</S.Title>

      <Detail
        title="Gender"
        >
          <View style={{flexDirection: "row", alignItems: "center", gap: 3}}>
            <Foundation name="female-symbol" size={24} color="#4A90E2" />
            <S.GenderText gender="male">
              {FindPercentage(pokemon.pokemonData.gender_rate)}%,{'  '}
            </S.GenderText>
            <Foundation name="male-symbol" size={24} color="#FF66C4" />
            <S.GenderText gender="female">
              {FindPercentage(8 - pokemon.pokemonData.gender_rate)}%
            </S.GenderText>
          </View>
        </Detail>

      <Detail
        title="Egg Groups"
        detail="Monster, Grass"
      />

      <Detail
        title="Egg Cycles"
        detail="20"
      />

      <S.Title type={type}>Location</S.Title>

      <Detail
        title="001"
        detail="(Red/Blue/Yellow)"
      />

      <Detail
        title="226"
        detail="(Gold/Silver/Crystal)"
      />

      <Detail
        title="231"
        detail="(HeartGold/SoulSilver)"
      />
    </S.Container>
  )
}




