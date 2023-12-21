import React from 'react';
import { TextInputProps } from 'react-native';
import { Feather } from '@expo/vector-icons';

import * as Styled from './styles';

interface InputProps extends TextInputProps {
  icon: string;
}


const Input: React.FC<InputProps> = ({ icon, ...rest }) => {
    return (
        <Styled.InputContainer>
            <Feather name='search' size={20} color="#747476" />
            <Styled.InputField {...rest} />
        </Styled.InputContainer>
    );
};

export default Input;
