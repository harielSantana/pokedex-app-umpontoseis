import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";
import { TypeName } from "../interface";


interface TypeProps {
    type: TypeName
}

interface GenderProps {
    gender: 'male' | 'female'
}

export const Container = styled.View`
    width: 100%;
    /* background-color: red; */
`

export const DescriptionText = styled.Text`
    ${({ theme }) => css`
        font-size: ${RFValue(theme.font_size.pokemon_number_type)}px;
        color: #000;
        margin: 20px 0;
    `}`

export const Title = styled.Text<TypeProps>`
    ${({ theme, type }) => css`
        font-weight: 700;
        font-size: ${RFValue(theme.font_size.pokemon_number_type)}px;
        color: ${theme.background_type[type]};
        margin: 8px 0;
    `}`

export const GenderText = styled.Text<GenderProps>`
    ${({ theme, gender }) => css`
        color: ${gender === 'male' ? '#4A90E2' : '#FF66C4'};
        font-weight: 700;
        font-size: ${RFValue(theme.font_size.pokemon_number_type)}px;
    `}`
