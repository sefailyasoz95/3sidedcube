import {createAsyncThunk} from '@reduxjs/toolkit';
import {GetPokemonDetailsAsync, GetPokemonsAsync} from '../services/service';

export const getPokemons = createAsyncThunk(
  'global/getPokemons',
  async (_, thunkAPI) => {
    try {
      return await GetPokemonsAsync();
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  },
);

export const getPokemonDetails = createAsyncThunk(
  'global/getPokemonDetails',
  async (id: number, thunkAPI) => {
    try {
      return await GetPokemonDetailsAsync(id);
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  },
);
