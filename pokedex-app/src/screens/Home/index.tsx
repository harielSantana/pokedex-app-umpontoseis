// screens/HomeScreen.tsx

import React from 'react';
import { Text, Keyboard, TouchableWithoutFeedback, KeyboardAvoidingView } from 'react-native';
import * as Styled from './styles';
import GenerationSVG from '../../assets/icons/generation.svg'
import SortSVG from '../../assets/icons/sort.svg'
import FilterSVG from '../../assets/icons/filter.svg'
import Input from '../../components/Input';
import Card from '../../components/Card';

const HomeScreen: React.FC = () => {
  return (
    <KeyboardAvoidingView behavior="height" enabled>
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Styled.Container>
          {/* Header */}
          <Styled.HeaderContainer>
            <Styled.ImageContainer>
              <GenerationSVG width={26} height={26} color={'#000'}/>
              <SortSVG width={26} height={26} color={'#000'}/>
              <FilterSVG width={26} height={26} color={'#000'}/>
            </Styled.ImageContainer>
          </Styled.HeaderContainer>

          <Styled.MainContainer>
            <Styled.Title>Pokédex</Styled.Title>
            <Styled.Description>
              Search for Pokémon
              by name or using the National Pokédex 
              number.  
            </Styled.Description>

            <Input icon="search" placeholder="What Pokémon are you looking for?" />

            <Card/>

          </Styled.MainContainer>

        </Styled.Container>
      </TouchableWithoutFeedback>
		</KeyboardAvoidingView>
  );
};

export default HomeScreen;

