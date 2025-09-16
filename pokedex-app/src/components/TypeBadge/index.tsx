import React from 'react';
import { Text, View } from 'react-native';
import { PokemonTypeName } from '@/types/pokemon';
import { cn } from '@/utils/cn';

interface TypeBadgeProps {
  type: string;
  className?: string;
}

const TypeBadge: React.FC<TypeBadgeProps> = ({ type, className = '' }) => {
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

  const textColors = {
    bug: 'text-bug',
    dark: 'text-dark',
    dragon: 'text-dragon',
    electric: 'text-electric',
    fairy: 'text-fairy',
    fighting: 'text-fighting',
    fire: 'text-fire',
    flying: 'text-flying',
    ghost: 'text-ghost',
    grass: 'text-grass',
    ground: 'text-ground',
    ice: 'text-ice',
    normal: 'text-normal',
    poison: 'text-poison',
    psychic: 'text-psychic',
    rock: 'text-rock',
    steel: 'text-steel',
    water: 'text-water',
  };

  const normalizedType = type.toLowerCase() as PokemonTypeName;
  const bgColor = typeColors[normalizedType] || 'bg-bg-normal';
  const textColor = textColors[normalizedType] || 'text-normal';

  const formatTypeName = (typeName: string) => {
    return typeName.charAt(0).toUpperCase() + typeName.slice(1);
  };

  return (
    <View
      className={cn(
        'px-3 py-1 rounded-full',
        bgColor,
        className
      )}
    >
      <Text
        className={cn(
          'text-type-text font-sf-medium',
          textColor
        )}
      >
        {formatTypeName(type)}
      </Text>
    </View>
  );
};

export default TypeBadge;
