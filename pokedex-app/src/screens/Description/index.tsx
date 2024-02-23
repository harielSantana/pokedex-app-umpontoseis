// screens/HomeScreen.tsx

import { Feather } from '@expo/vector-icons'
import { useNavigation, useRoute } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { Alert, ScrollView, Text } from 'react-native'
import { useTheme } from 'styled-components/native'

import { FadeAnimation } from '@components/FadeAnimation'
import PokemonType from '@components/Type'

import { type PokemonProps } from './interface'
import * as S from './styles'

import circle from '../../assets/images/circle.png'
import dots from '../../assets/images/dots.png'
import { api } from '../../services/api/index'
import { About } from './About'
import { Evolution } from './Evolution'
import { Stats } from './Stats'

export const DescriptionScreen: React.FC = () => {
  const { type } = useTheme()
  const route = useRoute()
  const { goBack } = useNavigation()
  const { pokemonId } = route.params as { pokemonId: number }

  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [pokemon, setPokemon] = useState({} as PokemonProps)

  async function getPokemonDetails(pokemonId: number) {
    try {
      const pokemonPromise = api.get(`pokemon/${pokemonId}`);
      const pokemonSpeciesPromise = api.get(`pokemon-species/${pokemonId}`);
      const pokemonTypePromise = api.get(`type/${pokemonId}`);
      const pokemonAbilityPromise = api.get(`ability/${pokemonId}`);

      const [pokemonResponse, pokemonSpeciesResponse, pokemonTypeResponse] = await Promise.all([pokemonPromise, pokemonSpeciesPromise,pokemonTypePromise]);

      const { id, name, types, abilities, stats, height, weight,base_experience } = pokemonResponse.data;
      const { flavor_text_entries, genera, growth_rate, capture_rate,gender_rate} = pokemonSpeciesResponse.data; // use this data as needed
      const { damage_relations } = pokemonTypeResponse.data;


      const pokemonType = types[0].type.name;
      //@ts-ignore
      const backgroundColor = type[pokemonType];
      const description = flavor_text_entries[7].flavor_text.trim().replace(/\s+/g, ' ');

      const pokemonData = {
        species: genera[7].genus,
        height,
        weight,
        weaknesses: damage_relations.double_damage_from.map((type: any) => type.name),
        growth_rate: growth_rate.name,
        capture_rate,
        base_experience,
        gender_rate
      }


      setPokemon({
        id,
        name,
        types,
        abilities: abilities.map((ability: any) => ability.ability.name),
        stats,
        description,
        color: backgroundColor,
        pokemonData
      });
    } catch (err) {
      Alert.alert('Algo deu errado', 'Não foi possível carregar os detalhes do pokémon');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (typeof pokemonId === 'number') {
      getPokemonDetails(pokemonId)
    }
  }, [pokemonId])

  function handleGoBack () {
    goBack()
  }

  return (
    <>
      {loading
        ? <>
            <Text>Carregando</Text>
          </>
          : <ScrollView
              style={{ flex: 1, backgroundColor: '#fff' }}
              showsVerticalScrollIndicator={false}
            >
              <S.Header type={pokemon.types[0].type.name}>
                <S.BackButton onPress={handleGoBack}>
                  <Feather name="chevron-left" size={24} color="#FFF"/>
                </S.BackButton>

                <FadeAnimation>
                  <S.ContentImage>
                    <S.CircleImage source={circle} />
                    <S.PokemonImage
                    source={{
                      uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`
                    }}
                    />
                  </S.ContentImage>
                </FadeAnimation>
                <S.Content>
                  <S.CardId>#0{pokemon.id}</S.CardId>
                  <S.Name>{pokemon.name}</S.Name>
                  <S.PokemonTypeContainer>
                    {pokemon.types.map((type: any, index) => (
                      <PokemonType key={index} type={type.type.name} />
                    ))}
                  </S.PokemonTypeContainer>
                </S.Content>
                <S.DotsImage source={dots}/>
              </S.Header>

              <S.Section>
                <S.Button>
                  <S.ButtonText onPress={() => setPage(1)}>About</S.ButtonText>
                </S.Button>

                <S.Button>
                  <S.ButtonText onPress={() => setPage(2)}>Stats</S.ButtonText>
                </S.Button>


                <S.Button>
                  <S.ButtonText onPress={() => setPage(3)}>Evolution</S.ButtonText>
                </S.Button>
              </S.Section>

              <S.Container>
                {page === 1 && <About type={pokemon.types[0].type.name} pokemon={pokemon} />}
                {page === 2 && <Stats/>}
                {page === 3 && <Evolution/>}
              </S.Container>
            </ScrollView>
      }
    </>
  )
}
