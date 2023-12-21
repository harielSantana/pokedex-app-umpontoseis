
export interface PokemonType {
  type: string;
}

export type Pokemon = {
  name: string;
  url: string;
  id: number;
  types: PokemonType[];
  sprites: string;
}

export type Resquest = {
  id: number;
  types: PokemonType[]; 
  sprites: any;
}
