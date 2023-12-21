// screens/HomeScreen.tsx

import React, { useEffect, useState } from 'react';
import { Text, Keyboard, TouchableWithoutFeedback, KeyboardAvoidingView, FlatList } from 'react-native';
import * as Styled from './styles';
import GenerationSVG from '../../assets/icons/generation.svg'
import SortSVG from '../../assets/icons/sort.svg'
import FilterSVG from '../../assets/icons/filter.svg'
import Input from '../../components/Input';
import Card from '../../components/Card';
import api from '../../services/api';
import { Pokemon, Resquest } from './_types';


const HomeScreen: React.FC = () => {

  const [pokemons, setPokemons] = useState<Pokemon[]>([])

  useEffect(() => {
    async function getAllPokemons() {
      const response = await api.get('pokemon');
      const {results} = response.data;

      const payloadPokemons = await Promise.all(
        results.map(async (pokemon: Pokemon) => {
          const {id, types, sprites} = await getMoreInfo(pokemon.url)
        
          return {
            name: pokemon.name,
            id,
            types,
            sprites: sprites.front_default,
          }
        })
      )
      setPokemons(payloadPokemons);
    }

    getAllPokemons();
  },[])

  async function getMoreInfo(url: string): Promise<Resquest>{
    const response = await api.get(url);
    const {id, types, sprites} = response.data;

    return {id, types, sprites};
  }

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
            <FlatList
              data={pokemons}
              renderItem={({item}) => <Card value={item} />}
              keyExtractor={(item) => String(item.id)} 
            />
          </Styled.MainContainer>

        </Styled.Container>
      </TouchableWithoutFeedback>
		</KeyboardAvoidingView>
  );
};

export default HomeScreen;

