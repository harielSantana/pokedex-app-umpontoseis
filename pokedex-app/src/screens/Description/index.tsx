// screens/HomeScreen.tsx

import { Feather } from '@expo/vector-icons'
import { useNavigation, useRoute } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { ActivityIndicator, ScrollView, View } from 'react-native'
import { useTheme } from 'styled-components/native'

import { FadeAnimation } from '@components/FadeAnimation'
import PokemonType from '@components/Type'

import { type PokemonProps } from './interface'
import * as S from './styles'

import circle from '../../assets/images/circle.png'
import dots from '../../assets/images/dots.png'
import { About } from './About'
import { Evolution } from './Evolution'
import { Stats } from './Stats'
import { getPokemonDetails } from './request'

export const DescriptionScreen: React.FC = () => {
  const { type } = useTheme()
  const route = useRoute()
  const { goBack } = useNavigation()
  const { pokemonId } = route.params as { pokemonId: number }

  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [pokemon, setPokemon] = useState({} as PokemonProps)

  async function getPokemon() {
    try {
      const data = await getPokemonDetails(pokemonId);
      console.log(data)
      setPokemon(data)
    } catch (err: any) {
      console.log(err)
    } finally {
      setLoading(false)
    }

  }

  useEffect(() => {
    if (typeof pokemonId === 'number') {
      setTimeout(() => {
        getPokemon();
      }, 1000);
    }
  }, [pokemonId])

  function handleGoBack () {
    goBack()
  }

  return (
    <>
      {loading
        ? <View style={{ flex: 1, justifyContent: 'center', alignItems:'center'}}>
            <ActivityIndicator size="large" color="#d7d7d7" />

          </View>
          : <ScrollView
              style={{ flex: 1, backgroundColor: '#fff' }}
              showsVerticalScrollIndicator={false}
            >
                <S.Header type={pokemon?.types?.[0]?.type?.name}>
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
