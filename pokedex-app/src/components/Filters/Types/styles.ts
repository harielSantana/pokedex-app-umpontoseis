import { IPokemonType } from "@components/Type/_types";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const IconContainer = styled.View<{
  type: IPokemonType;
  isSelected: boolean;
}>`
  border-radius: 50%;
  background-color: red;
  padding: 10px;
  width: auto;
  height: auto;
  background-color: ${({ theme, type }) => theme.type[type] || "#FFFFF"};
  opacity: ${({ isSelected }) => (isSelected ? 1 : 0.5)};

  margin-right: 10px;
`;

export const Container = styled.View`
  flex: 1;
  align-items: first baseline;
  margin-top: ${RFValue(12)}px;
  background-color: blue;
`;

export const Touchable = styled.TouchableOpacity``;
