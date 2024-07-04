import styled from 'styled-components/native';

export const Container = styled.View`
    width: 100%;
    padding: 16px;
`;

export const Title = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: #333;
    margin-bottom: 8px;
`;

export const DamageRow = styled.View`
    flex-direction: row;
    flex-wrap: wrap;
    margin-bottom: 8px;
`;

export const TypeItem = styled.View`
    flex-direction: row;
    align-items: center;
    margin: 4px;
`;

export const TypeIcon = styled.Image`
    width: 24px;
    height: 24px;
    margin-right: 4px;
`;

export const TypeLabel = styled.Text`
    font-size: 16px;
    color: #333;
`;
