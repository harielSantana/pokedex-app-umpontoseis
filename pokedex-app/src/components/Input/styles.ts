import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";


export const InputContainer = styled.View`
    flex-direction: row;
    align-items: center;

    background-color: ${({ theme }) => theme.background.default_input};
    border: 1px solid ${({ theme }) => theme.background.default_input};
    border-radius: 8px;

    padding: 15px;
    margin-top: 25px;
    margin-bottom: 10px;
`;

export const InputField = styled.TextInput`
    flex: 1;
    padding: 0 10px;
    color: ${({ theme }) => theme.text.gray};
    font-size: ${({ theme }) => RFValue(theme.font_size.filter_type_and_description)}px;
    font-weight: 400;
`;

export const InputIcon = styled.Image`
    margin-right: 5px;
`;

export const BlurButton = styled.View`
    margin-top: -10px;
    width: 100%;
    height: 25px;

`;
