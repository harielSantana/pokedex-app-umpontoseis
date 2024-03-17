import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { IPokemonType } from "../Type/_types";

export const PokemonCard = styled.TouchableOpacity <{ type: IPokemonType }>`
    padding: ${RFValue(20)}px;
    margin-top: ${RFValue(20)}px;
    border-radius: 10px;
    background-color: ${({ theme, type }) => theme.background_type[type] || "#FFFFF"};
    flex-direction: row;
    border-left: 1px solid #000;
`;

export const Initial = styled.View`
    position:relative;
    width: 65%;
`;

export const InitialImage = styled.Image`
    position: absolute;
    width: ${RFValue(74)}px;
    height: ${RFValue(32)}px;
    left: ${RFValue(60)}px;
    top:-${RFValue(10)}px;
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

export const LastImage = styled.View`
    justify-content: center;
    align-items: center;
    width: 35%;
    position: relative;
`;

export const PokemonImage = styled.Image`
    margin-top: -45px;
    width: ${RFValue(130)}px;
    height: ${RFValue(130)}px;
`;
