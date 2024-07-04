import styled, { css } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { TypeName } from "@screens/Description/interface";

interface TypeProps {
  type: TypeName;
}

export const Container = styled.View`
    width: 100%;
    padding: 16px;
`;

export const Title = styled.Text<TypeProps>`
    ${({ theme, type }) => css`
        font-weight: 700;
        font-size: ${RFValue(theme.font_size.pokemon_number_type)}px;
        color: ${theme.background_type[type]};
        margin: 8px 0;
    `}
`;

export const StatsList = styled.View`
    width: 100%;
`;

export const StatRow = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 8px 0;
`;

export const StatName = styled.Text`
    font-size: ${({ theme }) => theme.font_size.type}px;
    font-weight: 400;
    color: ${({ theme }) => theme.text.gray};
    width: 80px;
`;

export const StatValue = styled.Text`
    font-size: ${({ theme }) => theme.font_size.type}px;
    font-weight: 400;
    color: ${({ theme }) => theme.text.gray};
    width: 30px;
    text-align: right;
`;

export const StatBarWrapper = styled.View`
    flex: 1;
    height: 8px;
    background-color: ${({ theme }) => theme.background.button};
    margin: 0 8px;
    border-radius: 4px;
    overflow: hidden;
`;

export const StatBar = styled.View<TypeProps & { width: number }>`
    ${({ theme, type, width }) => css`
        width: ${width}%;
        height: 100%;
        background-color: ${theme.background_type[type]};
    `}
`;

export const StatRange = styled.Text`
    font-size: ${({ theme }) => theme.font_size.type}px;
    font-weight: 400;
    color: ${({ theme }) => theme.text.gray};
    width: 40px;
    text-align: right;
`;

export const TotalRow = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-top: 16px;
    border-top-width: 1px;
    border-top-color: ${({ theme }) => theme.text.gray};
    padding-top: 8px;
`;

export const TotalName = styled.Text`
    font-size: ${({ theme }) => theme.font_size.type}px;
    font-weight: 700;
    color: ${({ theme }) => theme.text.gray};
`;

export const TotalValue = styled.Text`
    font-size: ${({ theme }) => theme.font_size.type}px;
    font-weight: 700;
    color: ${({ theme }) => theme.text.gray};
`;
