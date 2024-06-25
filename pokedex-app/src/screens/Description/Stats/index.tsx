import React from "react"

import * as S from './styles'

import { PokemonProps } from "../interface";

interface StatsProps {
    type: any;
    pokemon: PokemonProps;
}

export const Stats: React.FC<StatsProps> = ({type, pokemon}:StatsProps) => {
    console.log(pokemon.stats)
    return (
        <S.Container>
            <S.Title type={type}>Base Stats</S.Title>
        </S.Container>
    )
}
