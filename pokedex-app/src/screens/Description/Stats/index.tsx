import React from "react";
import * as S from './styles';
import { PokemonProps } from "../interface";
import { StatRowComponent } from "@components/StatsRow";
import TypeDefenses from "@components/TypeDefense";

interface StatsProps {
    type: any;
    pokemon: PokemonProps;
}

const convertTextOnBaseStats = (stat: string) => {
    switch (stat) {
        case 'hp':
            return 'Hp';
        case 'attack':
            return 'Attack';
        case 'defense':
            return 'Defense';
        case 'special-attack':
            return 'Sp. Atk';
        case 'special-defense':
            return 'Sp. Def';
        case 'speed':
            return 'Speed';
        default:
            return stat.replace('-', ' ').replace(/\b\w/g, (char) => char.toUpperCase());
    }
};

export const Stats: React.FC<StatsProps> = ({ type, pokemon }: StatsProps) => {
    const {stats, damage_relation} = pokemon;


    return (
        <S.Container>
            <S.Title type={type}>Base Stats</S.Title>
            <S.StatsList>
                {stats.map((stat, index) => (
                    <StatRowComponent
                        key={index}
                        name={stat.stat.name}
                        baseStat={stat.base_stat}
                        type={type}
                    />
                ))}
            </S.StatsList>
            <S.TotalRow>
                <S.TotalName>Total</S.TotalName>
                <S.TotalValue>{stats.reduce((total, stat) => total + stat.base_stat, 0)}</S.TotalValue>
            </S.TotalRow>
            <S.DescriptionText>
                The ranges shown on the right are for a level 100 Pokémon. Maximum values are based on a beneficial nature, 252 EVs, 31 IVs; minimum values are based on a hindering nature, 0 EVs, 0 IVs.
            </S.DescriptionText>

            <S.Title type={type}>Type Defenses</S.Title>

            <TypeDefenses damageRelations={pokemon.damage_relation} />


        </S.Container>
    );
};
