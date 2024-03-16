import { Feather } from "@expo/vector-icons";
import React, { Fragment, useState } from "react";
import { TextInputProps } from "react-native";
import * as Styled from "./styles";


interface InputProps extends TextInputProps {
  icon: string;
  onTextChange: (text: string) => void;
}


const SearchInput: React.FC<InputProps> = React.memo(
  ({ icon, onTextChange, ...rest }) => {
    const [isFocused, setIsFocused] = useState(false);

    return (
      <Fragment>
        <Styled.InputContainer isFocused={isFocused}>
          <Feather
            name={"search"}
            size={20}
            color={"#CCCCCC"}
          />
          <Styled.InputField
            {...rest}
            onChangeText={onTextChange}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
        </Styled.InputContainer>
        <Styled.BlurButton />
      </Fragment>
    );
  }
);

export default SearchInput;
