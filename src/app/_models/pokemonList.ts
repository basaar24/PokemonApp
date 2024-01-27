import { PokemonItem } from "./pokemonItem";

export interface PokemonList {
  count: number;
  next: string;
  previous: any;
  results: Partial<PokemonItem[]>;
}
