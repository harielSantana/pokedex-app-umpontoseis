import { Platform } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

const isPlatform = Platform.OS === "ios";

export const KAV = styled.KeyboardAvoidingView`
`;

export const Container = styled.View`
    margin-top: ${RFValue(isPlatform ? 50: 20)}px;
    padding-left: ${RFValue(20)}px;
    padding-right: ${RFValue(20)}px;
    background-color: ${({theme}) => theme.background.white};
`;

export const HeaderContainer = styled.View`
`;

export const ImageContainer = styled.View`
    flex-direction: row;
    justify-content: flex-end;

    gap: ${RFValue(20)}px;
`;

export const MainContainer = styled.View`
    margin-top: 12px;
`;

export const Title = styled.Text`
    font-weight: bold;
    font-size: ${({ theme }) => 
        RFValue(theme.font_size.application_title)}px;
`;

export const Description = styled.Text`
    margin-top: 10px;

    color: ${({theme})=> theme.text.gray};
    font-weight: normal;
    font-size: ${({ theme }) => 
        RFValue(theme.font_size.filter_type_and_description)}px;
`; 
