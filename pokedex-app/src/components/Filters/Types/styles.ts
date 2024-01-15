import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const IconContainer = styled.View`
    border-radius: 50%;
    background-color: red;
    padding: 10px;
    width: auto;
    height: auto;
`;

export const Container = styled.View`
    flex: 1;
    align-items: first baseline;
    margin-top: ${RFValue(12)}px;
    background-color: blue;
`;
