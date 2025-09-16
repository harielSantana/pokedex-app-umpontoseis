import { Pokemon } from './pokemon';

export type RootStackParamList = {
  index: undefined;
  'pokemon/[id]': { id: string };
};

export interface PokemonDetailProps {
  pokemon: Pokemon;
}
