import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";
import { TypeName } from "../interface";


interface TypeProps {
    type: TypeName
}

export const DescriptionText = styled.Text`
    font-size: 16px;
    color: #000;
    margin: 20px 0;
`

export const Title = styled.Text<TypeProps>`
    ${({ theme, type }) => css`
        color: ${theme.background_type[type]};
        font-weight: 700;
        font-size: ${RFValue(theme.font_size.pokemon_number_type)}px;
    `}`

