// screens/HomeScreen.tsx

import React from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import * as S from "./styles";
import { useRoute } from "@react-navigation/native";

export const DescriptionScreen: React.FC = () => {
  const route = useRoute();
  const { pokemonId } = route.params as { pokemonId: number };

  return (
    <S.KAV behavior="height" enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <S.Container></S.Container>
      </TouchableWithoutFeedback>
    </S.KAV>
  );
};
