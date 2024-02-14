
interface Stat {
    base_stat: number;
    stat: {
      name: string;
    };
  }

  interface Ability {
    ability: {
      name: string;
    };
  }

  export type TypeName =
    | 'grass'
    | 'fire'
    | 'water'
    | 'poison'
    | 'normal'
    | 'bug'
    | 'flying'
    | 'eletric'
    | 'ground'


  interface PokemonType {
    type: {
      name: TypeName
    }
  }

export interface PokemonProps {
    id: number;
    name: string;
    stats: Stat[];
    abilities: Ability[];
    color: string;
    types: PokemonType[];
  }
