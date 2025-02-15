export interface Pokemon {
  id: number;
  pokedexId: number;
  name: string;
  image: string;
  sprite: string;
  slug: string;
  stats: Stats;
  apiTypes?: ApiTypes[] | null;
  apiGeneration: number;
  apiResistances?: ApiResistances[] | null;
  resistanceModifyingAbilitiesForApi?: null[] | null;
  apiEvolutions?: ApiEvolutions[] | null;
  apiPreEvolution: string;
  apiResistancesWithAbilities?: null[] | null;
}

export interface Stats {
  HP: number;
  attack: number;
  defense: number;
  special_attack: number;
  special_defense: number;
  speed: number;
}

export interface ApiTypes {
  name: string;
  image: string;
}

export interface ApiResistances {
  name: string;
  damage_multiplier: number;
  damage_relation: string;
}

export interface ApiEvolutions {
  name: string;
  pokedexId: number;
}
