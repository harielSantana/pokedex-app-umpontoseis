// screens/HomeScreen.tsx

import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  Text,
  Keyboard,
  TouchableWithoutFeedback,
  FlatList,
  Platform,
  View,
} from "react-native";
import * as S from "./styles";
import GenerationSVG from "../../assets/icons/generation.svg";
import SortSVG from "../../assets/icons/sort.svg";
import FilterSVG from "../../assets/icons/filter.svg";
import SearchInput from "../../components/Input";
import Card from "../../components/Card";
import { api } from "../../services/api";
import { Pokemon, Resquest } from "./_types";
import { RFPercentage } from "react-native-responsive-fontsize";
import { BorderlessButton, RectButton } from "react-native-gesture-handler";
import { Modalize } from "react-native-modalize";
import FilterModal from "../../components/Modals/Filter";

const platform_ios = Platform.OS === "ios";

export const HomeScreen: React.FC = () => {
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [searchValue, setSearchValue] = useState<string>("");

  const modalizeRef = useRef<Modalize>(null);

  const onOpen = () => {
    modalizeRef.current?.open();
  };

  const handleSearchChange = useCallback((text: string) => {
    setSearchValue(text);
  }, []);

  async function getMoreInfo(url: string): Promise<Resquest> {
    const response = await api.get(url);
    const { id, types, sprites } = response.data;

    return { id, types, sprites };
  }

  const renderFooter = () => {
    return loading ? <Text>Loading...</Text> : null;
  };

  useEffect(() => {
    async function getAllPokemons() {
      try {
        setLoading(true);
        const response = await api.get(
          `pokemon?offset=${(page - 1) * 20}&limit=20`
        );
        const { results } = response.data;

        const payloadPokemons = await Promise.all(
          results.map(async (pokemon: Pokemon) => {
            const { id, types, sprites } = await getMoreInfo(pokemon.url);

            return {
              name: pokemon.name,
              id,
              types,
              sprites: sprites.front_default,
            };
          })
        );

        setPokemons((prevPokemons) => [...prevPokemons, ...payloadPokemons]);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    }

    getAllPokemons();
  }, [page]);

  return (
    <>
      <S.KAV behavior="height" enabled>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <S.Container>
            {/* Header */}
            <S.HeaderContainer>
              <S.ImageContainer>
                <BorderlessButton onPress={onOpen}>
                  <GenerationSVG width={26} height={26} color={"#000"} />
                </BorderlessButton>
                <SortSVG width={26} height={26} color={"#000"} />
                <FilterSVG width={26} height={26} color={"#000"} />
              </S.ImageContainer>
            </S.HeaderContainer>

            {/* Main Content */}
            <S.MainContainer>
              <S.Title>Pokédex</S.Title>
              <S.Description>
                Search for Pokémon by name or using the National Pokédex number.
              </S.Description>

              <SearchInput
                icon="search"
                placeholder="What Pokémon are you looking for?"
                onTextChange={handleSearchChange}
              />

              <FlatList
                data={pokemons}
                renderItem={({ item }) => <Card value={item} />}
                keyExtractor={(item) => String(item.id)}
                showsVerticalScrollIndicator={false}
                onEndReached={() => {
                  if (!loading) {
                    setPage(page + 1);
                  }
                }}
                onEndReachedThreshold={0.1}
                ListFooterComponent={renderFooter}
                style={{
                  height: RFPercentage(platform_ios ? 75 : 65),
                  marginTop: -10,
                }}
              />
            </S.MainContainer>
          </S.Container>
        </TouchableWithoutFeedback>
      </S.KAV>
      <Modalize snapPoint={550} ref={modalizeRef}>
        <FilterModal />
      </Modalize>
    </>
  );
};
