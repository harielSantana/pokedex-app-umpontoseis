import React from 'react';
import * as S from './styles';
import { TypeName } from '@screens/Description/interface';

interface StatRowProps {
    name: string;
    baseStat: number;
    type: TypeName;
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

export const StatRowComponent: React.FC<StatRowProps> = ({ name, baseStat, type }) => {
    return (
        <S.StatRow>
            <S.StatName>{convertTextOnBaseStats(name)}</S.StatName>
            <S.StatValue>{baseStat}</S.StatValue>
            <S.StatBarWrapper>
                <S.StatBar type={type} width={baseStat / 2.5} />
            </S.StatBarWrapper>
            <S.StatRange>{100}</S.StatRange>
        </S.StatRow>
    );
};
