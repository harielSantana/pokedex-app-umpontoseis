import { Detail } from "@components/Detail"
import React from "react"
import { PokemonProps } from "../interface"
import * as S from './styles'

interface AboutProps {
  type: any
  pokemon: PokemonProps
}

export const About: React.FC<AboutProps> = ({type, pokemon}: AboutProps) => {
  return (
    <>
      <S.DescriptionText>{pokemon.description}</S.DescriptionText>
      <S.Title type={type}>Pokedex Data</S.Title>
      <Detail
        title="Species"
        detail="Seed Pokemon"
      />

      <Detail
        title="Height"
        detail="07"
      />

      <Detail
        title="Weight"
        detail="69"
      />

      <Detail
        title="Abilities"
        detail="Overgrow"
      />

    <S.Title type={type}>Training</S.Title>
      <Detail
        title="EV Yield"
        detail={`${pokemon.pokemonData.height}`}
      />

      <Detail
        title="Catch Rate"
        detail="45"
      />

      <Detail
        title="Base Friendship"
        detail="70"
      />

      <Detail
        title="Base Exp"
        detail="64"
      />

      <Detail
        title="Growth Rate"
        detail="Medium Slow"
      />

      <S.Title type={type}>Breeding</S.Title>

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
        title="Base Happiness"
        detail="70"
      />

      <Detail
        title="Base Happiness"
        detail="70"
      />
    </>
  )
}


