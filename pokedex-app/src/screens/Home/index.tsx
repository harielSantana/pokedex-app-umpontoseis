import Card from "@components/Card";
import { FadeAnimation } from "@components/FadeAnimation";
import SearchInput from "@components/Input";
import FilterModal from "@components/Modals/Filter";
import React, { useCallback, useEffect, useRef, useState } from "react";

import {
  ActivityIndicator,
  FlatList,
  Keyboard,
  Platform,
  TouchableWithoutFeedback
} from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import { Modalize } from "react-native-modalize";
import { RFPercentage } from "react-native-responsive-fontsize";
import FilterSVG from "../../assets/icons/filter.svg";
import GenerationSVG from "../../assets/icons/generation.svg";
import SortSVG from "../../assets/icons/sort.svg";
import { api } from "../../services/api";
import { Pokemon, Resquest } from "./interface";
import * as S from "./styles";

const platform_ios = Platform.OS === "ios";

export const HomeScreen: React.FC = () => {
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [allPokemons, setAllPokemons] = useState<Pokemon[]>([]);
  const [searchResults, setSearchResults] = useState<Pokemon[]>([]);
  const [searchValue, setSearchValue] = useState<string>("");

  const modalizeRef = useRef<Modalize>(null);

  const onOpen = () => {
    modalizeRef.current?.open();
  };

  const handleSearchChange = useCallback((text: string) => {
    setSearchValue(text);
  }, []);

  const renderFooter = () => {
    return loading ? <ActivityIndicator size="small" color="#d7d7d7" style={{ marginTop: 6}}/>
      : null;
  };

  async function getMoreInfo(url: string): Promise<Resquest> {
    const response = await api.get(url);
    const { id, types, sprites } = response.data;

    return { id, types, sprites };
  }

  const handleSearchSubmit = useCallback(() => {
    // Se houver um valor de pesquisa, atualize os resultados da busca
    if (searchValue) {
      fetchPokemons(searchValue);
    }
  }, [searchValue]);

  async function fetchPokemons(query: string) {
    try {
      setLoading(true);

      const response = await api.get(`pokemon/${query}`);
      const pokemonData = response.data;

      if (!pokemonData) {
        setSearchResults([]); // Define como um array vazio se nenhum Pokémon for encontrado
        return;
      }

      const { id, name, types, sprites } = pokemonData;
      const responseData = [{
        id,
        name,
        types,
        sprites: sprites.other.showdown.front_default,
      }];

      setSearchResults(responseData as any);
    } catch (error) {
      console.error("Error fetching Pokémon data:", error);
    } finally {
      setLoading(false);
    }
  }


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

        // Atualize a lista de todos os Pokémon
        setAllPokemons((prevPokemons) =>
          page === 1 ? payloadPokemons : [...prevPokemons, ...payloadPokemons]
        );
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false); // Garante que loading seja definido como false, mesmo se ocorrer um erro
      }
    }

    if(!searchValue) getAllPokemons();
  }, [page, searchValue]); // Dependência apenas em 'page' para evitar chamadas desnecessárias

  // Renderize os pokémons com base nos resultados da busca, se houver uma busca em andamento
  const renderedPokemons = searchValue ? searchResults : allPokemons;

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
                onSubmitEditing={handleSearchSubmit} // Chama a função de busca ao pressionar Enter
              />

              {searchValue && renderedPokemons.length === 0 && (
                <S.NotFoundMessage>No Pokémon found with that name.</S.NotFoundMessage>
              )}

              <FlatList
                data={renderedPokemons}
                renderItem={({ item }) => (
                  <FadeAnimation>
                    <Card value={item} />
                  </FadeAnimation>
                )}
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
      <Modalize snapPoint={550} ref={modalizeRef} >
        <FilterModal />
      </Modalize>
    </>
  );
};
