interface Stat {
  base_stat: number
  stat: {
    name: string
  }
}

interface Ability {
  ability: {
    name: string
  }
}

export type TypeName =
    | 'grass'
    | 'fire'
    | 'water'
    | 'poison'
    | 'normal'
    | 'bug'
    | 'flying'
    | 'electric'
    | 'ground'

interface PokemonType {
  type: {
    name: TypeName
  }
}

export interface DamageRelation {
  name: string;
  url: string;
}

export interface DamageRelations {
  double_damage_from: DamageRelation[];
  double_damage_to: DamageRelation[];
  half_damage_from: DamageRelation[];
  half_damage_to: DamageRelation[];
  no_damage_from: DamageRelation[];
  no_damage_to: DamageRelation[];
}

export interface PokemonProps {
  id: number
  name: string
  stats: Stat[]
  abilities: Ability[]
  color: string
  damage_relation: DamageRelations
  types: PokemonType[]
  description: string
  pokemonData: any
}
