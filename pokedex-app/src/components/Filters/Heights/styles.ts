import { IPokemonHeight } from "@components/Modals/Filter/_types";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const IconContainer = styled.View<{
  height: IPokemonHeight;
  isSelected: boolean;
}>`
  border-radius: 50%;
  background-color: red;
  padding: 10px;
  width: auto;
  height: auto;
  background-color: ${({ theme, height }) => theme.height[height] || "#FFFFF"};
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
