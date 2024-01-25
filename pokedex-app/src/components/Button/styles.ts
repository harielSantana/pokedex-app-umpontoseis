import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

type ButtonType = "primary" | "secondary";

export const Container = styled.TouchableOpacity<{ type: ButtonType }>`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 16px;
  border-radius: 12px;

  background-color: ${({ theme, type }) =>
    type === "primary"
      ? theme.background_type.psychic
      : theme.background.default_input};
`;

export const TextValue = styled.Text<{ type: ButtonType }>`
  font-weight: 400;
  font-size: ${({ theme }) => RFValue(theme.font_size.type)}px;
  color: ${({ theme, type }) =>
    type === "primary" ? theme.text.white : theme.text.number};
`;
