import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { usePokemon } from '@/hooks/usePokemon';
import TypeBadge from '@/components/TypeBadge';
import Button from '@/components/Button';
import { cn } from '@/utils/cn';

const PokemonDetailScreen: React.FC = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  
  const { data: pokemon, isLoading, error } = usePokemon(Number(id));

  if (isLoading) {
    return (
      <SafeAreaView className="flex-1 bg-gray-50 items-center justify-center">
        <ActivityIndicator size="large" color="#17171B" />
        <Text className="text-pokemon-gray font-sf-medium mt-2">
          Loading Pokémon...
        </Text>
      </SafeAreaView>
    );
  }

  if (error || !pokemon) {
    return (
      <SafeAreaView className="flex-1 bg-gray-50 items-center justify-center px-6">
        <Text className="text-pokemon-gray text-lg font-sf-medium text-center mb-4">
          Pokémon not found
        </Text>
        <Button
          title="Go Back"
          onPress={() => router.back()}
          variant="primary"
        />
      </SafeAreaView>
    );
  }

  const primaryType = pokemon.types[0]?.type.name as keyof typeof typeColors || 'normal';
  
  const typeColors = {
    bug: 'bg-bg-bug',
    dark: 'bg-bg-dark',
    dragon: 'bg-bg-dragon',
    electric: 'bg-bg-electric',
    fairy: 'bg-bg-fairy',
    fighting: 'bg-bg-fighting',
    fire: 'bg-bg-fire',
    flying: 'bg-bg-flying',
    ghost: 'bg-bg-ghost',
    grass: 'bg-bg-grass',
    ground: 'bg-bg-ground',
    ice: 'bg-bg-ice',
    normal: 'bg-bg-normal',
    poison: 'bg-bg-poison',
    psychic: 'bg-bg-psychic',
    rock: 'bg-bg-rock',
    steel: 'bg-bg-steel',
    water: 'bg-bg-water',
  };

  const formatPokemonName = (name: string) => {
    return name.charAt(0).toUpperCase() + name.slice(1);
  };

  const formatPokemonNumber = (id: number) => {
    return `#${id.toString().padStart(3, '0')}`;
  };

  const formatStatName = (statName: string) => {
    return statName
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  const getStatColor = (statValue: number) => {
    if (statValue >= 100) return 'text-green-600';
    if (statValue >= 70) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View className="flex-row items-center justify-between px-6 py-4">
          <TouchableOpacity
            onPress={() => router.back()}
            className="w-10 h-10 items-center justify-center rounded-full bg-white shadow-sm"
          >
            <Text className="text-xl">←</Text>
          </TouchableOpacity>
          <Text className="text-lg font-sf-medium text-pokemon-black">
            Pokémon Details
          </Text>
          <View className="w-10" />
        </View>

        {/* Pokemon Image and Basic Info */}
        <View className="items-center px-6 mb-6">
          <View
            className={cn(
              'w-48 h-48 rounded-full items-center justify-center mb-4',
              typeColors[primaryType]
            )}
          >
            <Image
              source={{ 
                uri: pokemon.sprites.other?.showdown?.front_default || pokemon.sprites.front_default 
              }}
              className="w-40 h-40"
              resizeMode="contain"
            />
          </View>

          <Text className="text-pokemon-number text-pokemon-gray font-sf-regular mb-2">
            {formatPokemonNumber(pokemon.id)}
          </Text>
          
          <Text className="text-3xl text-pokemon-black font-sf-bold mb-4">
            {formatPokemonName(pokemon.name)}
          </Text>

          {/* Types */}
          <View className="flex-row flex-wrap justify-center">
            {pokemon.types.map((type, index) => (
              <TypeBadge
                key={index}
                type={type.type.name}
                className="mx-1 mb-2"
              />
            ))}
          </View>
        </View>

        {/* Stats */}
        <View className="bg-white mx-6 rounded-2xl p-6 mb-6">
          <Text className="text-xl text-pokemon-black font-sf-bold mb-4">
            Base Stats
          </Text>
          
          {pokemon.stats.map((stat, index) => (
            <View key={index} className="flex-row items-center justify-between mb-3">
              <Text className="text-base text-pokemon-gray font-sf-medium flex-1">
                {formatStatName(stat.stat.name)}
              </Text>
              <View className="flex-1 mx-4">
                <View className="h-2 bg-gray-200 rounded-full">
                  <View
                    className={cn(
                      'h-2 rounded-full',
                      stat.base_stat >= 100 ? 'bg-green-500' :
                      stat.base_stat >= 70 ? 'bg-yellow-500' : 'bg-red-500'
                    )}
                    style={{ width: `${Math.min((stat.base_stat / 150) * 100, 100)}%` }}
                  />
                </View>
              </View>
              <Text className={cn(
                'text-base font-sf-bold w-12 text-right',
                getStatColor(stat.base_stat)
              )}>
                {stat.base_stat}
              </Text>
            </View>
          ))}
        </View>

        {/* Physical Info */}
        <View className="bg-white mx-6 rounded-2xl p-6 mb-6">
          <Text className="text-xl text-pokemon-black font-sf-bold mb-4">
            Physical Info
          </Text>
          
          <View className="flex-row justify-between">
            <View className="flex-1 items-center">
              <Text className="text-2xl text-pokemon-black font-sf-bold">
                {pokemon.height / 10}m
              </Text>
              <Text className="text-pokemon-gray font-sf-medium">Height</Text>
            </View>
            
            <View className="flex-1 items-center">
              <Text className="text-2xl text-pokemon-black font-sf-bold">
                {pokemon.weight / 10}kg
              </Text>
              <Text className="text-pokemon-gray font-sf-medium">Weight</Text>
            </View>
          </View>
        </View>

        {/* Abilities */}
        <View className="bg-white mx-6 rounded-2xl p-6 mb-6">
          <Text className="text-xl text-pokemon-black font-sf-bold mb-4">
            Abilities
          </Text>
          
          <View className="flex-row flex-wrap">
            {pokemon.abilities.map((ability, index) => (
              <View
                key={index}
                className={cn(
                  'px-4 py-2 rounded-full mr-2 mb-2',
                  ability.is_hidden ? 'bg-yellow-100' : 'bg-gray-100'
                )}
              >
                <Text className="text-base font-sf-medium text-pokemon-black">
                  {ability.ability.name.charAt(0).toUpperCase() + ability.ability.name.slice(1)}
                  {ability.is_hidden && ' (Hidden)'}
                </Text>
              </View>
            ))}
          </View>
        </View>

        {/* Back Button */}
        <View className="px-6 pb-8">
          <Button
            title="Back to Pokédex"
            onPress={() => router.back()}
            variant="primary"
            className="w-full"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PokemonDetailScreen;
