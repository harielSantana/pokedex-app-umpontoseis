import styled from "styled-components/native";
import { Feather } from '@expo/vector-icons';
import { RFValue } from "react-native-responsive-fontsize";


export const InputContainer = styled.View`
    flex-direction: row;
    align-items: center;
    
    background-color: ${({ theme }) => theme.background.default_input};
    border: 1px solid ${({ theme }) => theme.background.default_input};
    border-radius: 8px;
    
    padding: 15px;
    margin-top: 25px;
`;

export const InputField = styled.TextInput`
    flex: 1;
    padding: 0 10px;
    color: ${({ theme }) => theme.background.default_input};
    font-size: ${({ theme }) => RFValue(theme.font_size.filter_type_and_description)}px;
    font-weight: 400;
`;

export const InputIcon = styled.Image`
    margin-right: 5px;
`;
