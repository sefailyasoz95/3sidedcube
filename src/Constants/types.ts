export type InitialState = {
  loading: boolean;
  success: boolean;
  pokemons: null | Pokemon[];
  pokemon: null | Pokemon;
  pokemonStats: Stat[] | null;
};

export type Pokemon = {
  name: string;
  url: string;
};

export type Stat = {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
};
