import { IPokemonType } from "../../components/Type/_types";

export type PokemonType = {
  slot: number;
  type: {
    name: IPokemonType;
    url: string;
  };
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
