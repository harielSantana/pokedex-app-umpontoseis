import React from 'react';
import { TouchableOpacity, Text, Image, View } from 'react-native';
import { useRouter } from 'expo-router';
import { Pokemon } from '@/types/pokemon';
import { cn } from '@/utils/cn';
import TypeBadge from '../TypeBadge';

interface CardProps {
  pokemon: Pokemon;
  className?: string;
}

const Card: React.FC<CardProps> = ({ pokemon, className = '' }) => {
  const router = useRouter();
  
  const primaryType = pokemon.types[0]?.type.name as keyof typeof typeColors || 'normal';
  
  const typeColors = {
    bug: 'bg-bug',
    dark: 'bg-dark',
    dragon: 'bg-dragon',
    electric: 'bg-electric',
    fairy: 'bg-fairy',
    fighting: 'bg-fighting',
    fire: 'bg-fire',
    flying: 'bg-flying',
    ghost: 'bg-ghost',
    grass: 'bg-grass',
    ground: 'bg-ground',
    ice: 'bg-ice',
    normal: 'bg-normal',
    poison: 'bg-poison',
    psychic: 'bg-psychic',
    rock: 'bg-rock',
    steel: 'bg-steel',
    water: 'bg-water',
  };

  const handlePress = () => {
    router.push(`/pokemon/${pokemon.id}`);
  };

  const formatPokemonNumber = (id: number) => {
    return `#${id.toString().padStart(3, '0')}`;
  };

  const formatPokemonName = (name: string) => {
    return name.charAt(0).toUpperCase() + name.slice(1);
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      className={cn(
        'bg-white rounded-2xl p-4 mb-4 mx-4 shadow-sm border border-gray-100',
        className
      )}
      activeOpacity={0.7}
    >
      <View className="flex-row items-center justify-between">
        {/* Pokemon Info */}
        <View className="flex-1">
          <Text className="text-pokemon-number text-pokemon-gray font-sf-regular mb-1">
            {formatPokemonNumber(pokemon.id)}
          </Text>
          
          <Text className="text-pokemon-name text-pokemon-black font-sf-bold mb-2">
            {formatPokemonName(pokemon.name)}
          </Text>
          
          {/* Types */}
          <View className="flex-row flex-wrap">
            {pokemon.types.map((type, index) => (
              <TypeBadge
                key={index}
                type={type.type.name}
                className="mr-2 mb-1"
              />
            ))}
          </View>
        </View>

        {/* Pokemon Image */}
        <View className="relative">
          <View
            className={cn(
              'w-20 h-20 rounded-full items-center justify-center',
              typeColors[primaryType]
            )}
          >
            <Image
              source={{ 
                uri: pokemon.sprites.other?.showdown?.front_default || pokemon.sprites.front_default 
              }}
              className="w-16 h-16"
              resizeMode="contain"
            />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Card;