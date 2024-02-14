import { Platform } from "react-native";
import styled, { css } from "styled-components/native";
import { TypeName } from "./interface";

const isPlatform = Platform.OS === "ios";

interface TypeProps {
    type: TypeName
}

export const Header = styled.View<TypeProps>`
    ${({ theme, type }) => css`
        background-color: ${theme.background_type[type]};
        height: 340px;
        padding: 20px;

        flex-direction: row;
        align-items: center;

        position: relative;
    `}`

export const BackButton = styled.TouchableOpacity`
    position: absolute;
    top:70px;
    left:40px;
`

export const ContentImage = styled.View`
    position: relative;

`

export const CircleImage = styled.Image`
    width: 125px;
    height: 125px;
    position: absolute;
`

export const PokemonImage = styled.Image`
    width: 125px;
    height: 125px;
`

