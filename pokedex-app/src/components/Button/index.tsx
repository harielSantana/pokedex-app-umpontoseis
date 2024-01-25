import * as S from "./styles";
import React from "react";

type ButtonType = "primary" | "secondary";

interface CustomButtonProps {
  title?: string;
  onPress?: (event: React.MouseEvent) => void;
  type?: ButtonType;
}
export const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  onPress,
  type,
}) => {
  return (
    <S.Container type={type}>
      <S.TextValue type={type}>{title}</S.TextValue>
    </S.Container>
  );
};
