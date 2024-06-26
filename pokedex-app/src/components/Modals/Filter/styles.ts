import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  padding: ${RFValue(20)}px;
`;

export const Title = styled.Text`
  font-weight: 700;
  font-size: ${({ theme }) => RFValue(theme.font_size.pokemon_name)}px;
`;

export const Description = styled.Text`
  margin-top: 10px;

  color: ${({ theme }) => theme.text.gray};
  font-weight: normal;
  font-size: ${({ theme }) =>
    RFValue(theme.font_size.filter_type_and_description)}px;
`;

export const FilterContainer = styled.View`
  display: flex;
  gap: ${RFValue(10)}px;
`;

export const Subtitle = styled.Text`
  font-weight: 700;
  font-size: ${({ theme }) => RFValue(theme.font_size.type)}px;
  text-transform: capitalize;
  color: ${({ theme }) => theme.text.black};

  margin-top: 12px;
  margin-bottom: 12px;
`;

export const ButtonContainer = styled.View`
  display: flex;
  flex-direction: row;
  gap: ${RFValue(10)}px;

  margin-top: ${RFValue(30)}px;
`;
