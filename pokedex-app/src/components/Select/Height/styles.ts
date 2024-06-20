// styles.ts
import styled from "styled-components/native";
import { IPokemonType } from "@components/Type/_types";
import { IPokemonHeight } from "@components/Modals/Filter/_types";

export const IconContainer = styled.View<{
  type?: IPokemonType;
  height?: IPokemonHeight;
  isSelected: boolean;
}>`
  // your existing styles
  opacity: ${({ isSelected }) => (isSelected ? 1 : 0.5)};
  border-width: ${({ isSelected }) => (isSelected ? 2 : 0)}px;
  border-color: ${({ isSelected }) => (isSelected ? "blue" : "transparent")};
  padding: 5px;
  margin: 5px;
  border-radius: 50px;
`;

export const Touchable = styled.TouchableOpacity``;
