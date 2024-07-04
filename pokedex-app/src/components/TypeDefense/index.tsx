import React from 'react';
import styled from 'styled-components/native';

import * as S from './styles'

interface DamageRelation {
    name: string;
    url: string;
}

interface DamageRelations {
    no_damage_to: DamageRelation[];
    half_damage_to: DamageRelation[];
    double_damage_to: DamageRelation[];
    no_damage_from: DamageRelation[];
    half_damage_from: DamageRelation[];
    double_damage_from: DamageRelation[];
}

interface TypeDefensesProps {
    damageRelations: DamageRelations;
}

const TypeDefenses: React.FC<TypeDefensesProps> = ({ damageRelations }) => {
    const renderDamageRelations = (relation: DamageRelation[], label: string) => {
        return relation.map((type, index) => (
            <S.TypeItem key={index}>
                <S.TypeIcon source={{ uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/${type.name}.png` }} />
                <S.TypeLabel>{label}</S.TypeLabel>
            </S.TypeItem>
        ));
    };

    return (
        <S.Container>
            <S.Title>Type Defenses</S.Title>
            <S.DamageRow>
                {renderDamageRelations(damageRelations.no_damage_from, '0')}
                {renderDamageRelations(damageRelations.half_damage_from, '½')}
                {renderDamageRelations(damageRelations.double_damage_from, '2')}
            </S.DamageRow>
            <S.DamageRow>
                {renderDamageRelations(damageRelations.no_damage_to, '0')}
                {renderDamageRelations(damageRelations.half_damage_to, '½')}
                {renderDamageRelations(damageRelations.double_damage_to, '2')}
            </S.DamageRow>
        </S.Container>
    );
};

export default TypeDefenses;
