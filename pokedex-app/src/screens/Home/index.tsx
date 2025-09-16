import React, { useState, useCallback } from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  Keyboard,
  TouchableWithoutFeedback,
  RefreshControl,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { usePokemonList, usePokemonSearch } from '@/hooks/usePokemon';
import Card from '@/components/Card';
import Input from '@/components/Input';
import Button from '@/components/Button';
import { cn } from '@/utils/cn';

const HomeScreen: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  const {
    data: pokemonListData,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    refetch,
    isRefetching,
  } = usePokemonList();

  const {
    data: searchResults,
    isLoading: isSearchLoading,
  } = usePokemonSearch(searchQuery);

  const handleSearch = useCallback((query: string) => {
    setSearchQuery(query);
    setIsSearching(query.length > 0);
  }, []);

  const handleClearSearch = useCallback(() => {
    setSearchQuery('');
    setIsSearching(false);
  }, []);

  const handleLoadMore = useCallback(() => {
    if (hasNextPage && !isFetchingNextPage && !isSearching) {
      fetchNextPage();
    }
  }, [hasNextPage, isFetchingNextPage, isSearching, fetchNextPage]);

  const renderPokemon = useCallback(({ item }: { item: any }) => (
    <Card pokemon={item} />
  ), []);

  const renderFooter = useCallback(() => {
    if (isFetchingNextPage) {
      return (
        <View className="py-4 items-center">
          <ActivityIndicator size="small" color="#17171B" />
        </View>
      );
    }
    return null;
  }, [isFetchingNextPage]);

  const renderEmpty = useCallback(() => {
    if (isSearching && searchResults?.length === 0) {
      return (
        <View className="flex-1 items-center justify-center py-20">
          <Text className="text-pokemon-gray text-lg font-sf-medium text-center">
            No Pokémon found with that name.
          </Text>
          <Button
            title="Clear Search"
            onPress={handleClearSearch}
            variant="outline"
            className="mt-4"
          />
        </View>
      );
    }
    return null;
  }, [isSearching, searchResults, handleClearSearch]);

  const pokemonData = isSearching ? searchResults : pokemonListData?.pages.flatMap(page => page.results);
  const isLoadingData = isSearching ? isSearchLoading : isLoading;

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View className="flex-1">
          {/* Header */}
          <View className="flex-row items-center justify-between px-6 py-4">
            <View className="flex-row items-center space-x-4">
              <Text className="text-2xl">⚙️</Text>
              <Text className="text-2xl">🔄</Text>
              <Text className="text-2xl">🔍</Text>
            </View>
          </View>

          {/* Main Content */}
          <View className="flex-1 px-6">
            <Text className="text-app-title text-pokemon-black font-sf-bold mb-2">
              Pokédex
            </Text>
            
            <Text className="text-base text-pokemon-gray font-sf-regular mb-6">
              Search for Pokémon by name or using the National Pokédex number.
            </Text>

            <Input
              placeholder="What Pokémon are you looking for?"
              value={searchQuery}
              onChangeText={handleSearch}
              icon="search"
              className="mb-6"
            />

            {isSearching && (
              <Button
                title="Clear Search"
                onPress={handleClearSearch}
                variant="outline"
                size="sm"
                className="mb-4 self-start"
              />
            )}

            {/* Pokemon List */}
            <FlatList
              data={pokemonData}
              renderItem={renderPokemon}
              keyExtractor={(item) => item.id.toString()}
              showsVerticalScrollIndicator={false}
              onEndReached={handleLoadMore}
              onEndReachedThreshold={0.1}
              ListFooterComponent={renderFooter}
              ListEmptyComponent={renderEmpty}
              refreshControl={
                <RefreshControl
                  refreshing={isRefetching}
                  onRefresh={refetch}
                  tintColor="#17171B"
                />
              }
              contentContainerStyle={{
                paddingBottom: 20,
              }}
            />

            {isLoadingData && !isSearching && (
              <View className="flex-1 items-center justify-center">
                <ActivityIndicator size="large" color="#17171B" />
                <Text className="text-pokemon-gray font-sf-medium mt-2">
                  Loading Pokémon...
                </Text>
              </View>
            )}
          </View>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default HomeScreen;