export interface PokemonType {
  name: string;
  url: string;
}

export interface PokemonSprites {
  front_default: string;
  other: {
    showdown: {
      front_default: string;
    };
  };
}

export interface Pokemon {
  id: number;
  name: string;
  types: Array<{
    slot: number;
    type: PokemonType;
  }>;
  sprites: PokemonSprites;
  height: number;
  weight: number;
  stats: Array<{
    base_stat: number;
    effort: number;
    stat: {
      name: string;
      url: string;
    };
  }>;
  abilities: Array<{
    ability: {
      name: string;
      url: string;
    };
    is_hidden: boolean;
    slot: number;
  }>;
}

export interface PokemonListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Array<{
    name: string;
    url: string;
  }>;
}

export interface PokemonDetailResponse extends Pokemon {
  species: {
    name: string;
    url: string;
  };
  evolution_chain: {
    url: string;
  };
}

export type PokemonTypeName = 
  | 'bug' | 'dark' | 'dragon' | 'electric' | 'fairy' 
  | 'fighting' | 'fire' | 'flying' | 'ghost' | 'grass' 
  | 'ground' | 'ice' | 'normal' | 'poison' | 'psychic' 
  | 'rock' | 'steel' | 'water';

export interface FilterState {
  types: PokemonTypeName[];
  generations: number[];
  heights: string[];
  weights: string[];
}
