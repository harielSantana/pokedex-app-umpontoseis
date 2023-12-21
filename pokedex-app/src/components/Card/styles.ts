import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Card = styled.View` 
    background-color: ${({ theme}) => theme.background_type.grass};
    border-radius: 10px;
    padding: ${RFValue(20)}px;
`;

export const CardId = styled.Text`
    font-weight: 500;
    font-size: ${({ theme}) => RFValue(theme.font_size.pokemon_number_type)}px;
    color: ${({ theme}) => theme.text.number};
`;

export const Name = styled.Text`
    font-weight: 700;
    font-size: ${({ theme}) => RFValue(theme.font_size.pokemon_name)}px;
    color: ${({ theme}) => theme.text.white};
`;

export const PokemonTypeContainer = styled.View`
    flex: 1 1 auto;
    flex-direction: row;
    gap: 5px;
`;
