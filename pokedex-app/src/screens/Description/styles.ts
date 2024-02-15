import { Platform } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
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



export const Initial = styled.View`
    position:relative;
    width: 65%;
    margin-left: 15px;
`;


export const CardId = styled.Text`
    font-weight: 900;
    font-size: ${({ theme }) => RFValue(theme.font_size.pokemon_number_type)}px;

    color: ${({ theme }) => theme.text.number};
`;

export const Name = styled.Text`
    font-weight: 700;
    font-size: ${({ theme }) => RFValue(theme.font_size.pokemon_name)}px;
    text-transform: capitalize;
    color: ${({ theme }) => theme.text.white};
`;

export const PokemonTypeContainer = styled.View`
    flex-direction: row;

    margin-top: 5px;
    gap: 5px;
`;

export const MainContainer = styled.View`
    padding: 8%;
`

export const Title = styled.Text<TypeProps>`
    ${({ theme, type }) => css`
        color: ${theme.background_type[type]};
        font-weight: 700;
        font-size: ${RFValue(theme.font_size.pokemon_number_type)}px;
    `}`
