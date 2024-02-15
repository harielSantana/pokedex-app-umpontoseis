import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: start;
    align-items: center;

    margin-top: ${RFValue(12)}px;
    margin-bottom: ${RFValue(12)}px;

    gap:${RFValue(50)}px ;
`

export const Title = styled.Text`
    font-size: ${({theme}) => theme.font_size.filter_type_and_description};
    font-weight: 500;
    color: ${({theme}) => theme.text.black};
`

export const Detail = styled.Text`
    font-size: ${({theme}) => theme.font_size.type};
    font-weight: 400;
    color: ${({theme}) => theme.text.gray};
`
