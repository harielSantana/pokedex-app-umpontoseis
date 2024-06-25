import styled, { css } from "styled-components/native";
import { TypeName } from "../interface";
import { RFValue } from "react-native-responsive-fontsize";

interface TypeProps {
  type: TypeName
}

export const Container = styled.View`
    width: 100%;
    /* background-color: red; */
`

export const Title = styled.Text<TypeProps>`
    ${({ theme, type }) => css`
        font-weight: 700;
        font-size: ${RFValue(theme.font_size.pokemon_number_type)}px;
        color: ${theme.background_type[type]};
        margin: 8px 0;
    `}`
