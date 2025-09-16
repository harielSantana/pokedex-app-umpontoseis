import { PokemonTypeName } from '@/types/pokemon';

export const POKEMON_TYPES: PokemonTypeName[] = [
  'normal', 'fire', 'water', 'electric', 'grass', 'ice',
  'fighting', 'poison', 'ground', 'flying', 'psychic',
  'bug', 'rock', 'ghost', 'dragon', 'dark', 'steel', 'fairy'
];

export const POKEMON_GENERATIONS = [
  { number: 1, name: 'Generation I', start: 1, end: 151 },
  { number: 2, name: 'Generation II', start: 152, end: 251 },
  { number: 3, name: 'Generation III', start: 252, end: 386 },
  { number: 4, name: 'Generation IV', start: 387, end: 493 },
  { number: 5, name: 'Generation V', start: 494, end: 649 },
  { number: 6, name: 'Generation VI', start: 650, end: 721 },
  { number: 7, name: 'Generation VII', start: 722, end: 809 },
  { number: 8, name: 'Generation VIII', start: 810, end: 905 },
  { number: 9, name: 'Generation IX', start: 906, end: 1025 },
];

export const HEIGHT_CATEGORIES = [
  { name: 'short', label: 'Short', min: 0, max: 0.5 },
  { name: 'medium', label: 'Medium', min: 0.5, max: 1.5 },
  { name: 'tall', label: 'Tall', min: 1.5, max: 10 },
];

export const WEIGHT_CATEGORIES = [
  { name: 'light', label: 'Light', min: 0, max: 10 },
  { name: 'normal', label: 'Normal', min: 10, max: 100 },
  { name: 'heavy', label: 'Heavy', min: 100, max: 1000 },
];

export const POKEMON_API_BASE_URL = 'https://pokeapi.co/api/v2';
export const POKEMON_IMAGES_BASE_URL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork';
