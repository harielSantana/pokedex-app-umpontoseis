import styled from "styled-components/native";
import { IPokemonType } from "./_types";
import { RFValue } from "react-native-responsive-fontsize";

export const TypeContainer = styled.View<{ type: IPokemonType }>`
    flex-direction: row;
    align-items: center;
    justify-content: start;
    background-color: ${({theme, type})=> theme.type[type] || "#FFFFF"};
    
    width: auto;
    padding: 5px;
    border-radius: 6px;
`;

export const Text = styled.Text`
    color:${({theme})=> theme.text.white};
    font-weight: 500;
    font-size: ${({theme}) => RFValue(theme.font_size.pokemon_number_type)}px;
    text-transform: capitalize;
    
    margin-left: 5px;
`;