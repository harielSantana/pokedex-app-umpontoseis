import React, { Fragment } from "react";
import { TextInputProps } from "react-native";
import { Feather } from "@expo/vector-icons";

import * as Styled from "./styles";

interface InputProps extends TextInputProps {
  icon: string;
  onTextChange: (text: string) => void;
}

const SearchInput: React.FC<InputProps> = React.memo(
  ({ icon, onTextChange, ...rest }) => {
    return (
      <Fragment>
        <Styled.InputContainer>
          <Feather name={"search"} size={20} color="#747476" />
          <Styled.InputField {...rest} onChangeText={onTextChange} />
        </Styled.InputContainer>
        <Styled.BlurButton />
      </Fragment>
    );
  }
);

export default SearchInput;
