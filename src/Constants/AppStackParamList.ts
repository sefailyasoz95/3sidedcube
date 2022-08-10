import {Pokemon} from './types';

export type AppStackParamList = {
  HomeScreen: undefined;
  DetailScreen: {
    pokemon: Pokemon;
  };
  CreateScreen: undefined;
};
