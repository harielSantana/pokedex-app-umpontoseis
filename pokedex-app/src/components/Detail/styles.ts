import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: start;
    align-items: center;

    margin-top: ${RFValue(6)}px;
    margin-bottom: ${RFValue(6)}px;

    gap:${RFValue(50)}px;
    /* background-color: red; */
`;

export const Title = styled.Text`
    font-size: ${({theme}) => theme.font_size.filter_type_and_description}px;
    font-weight: 500;
    color: ${({theme}) => theme.text.black};
    width: 33%;
`;

export const Detail = styled.Text`
    font-size: ${({theme}) => theme.font_size.type};
    font-weight: 400;
    color: ${({theme}) => theme.text.gray};
`;
