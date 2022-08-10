import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {InitialState} from '../../Constants/types';
import {getPokemonDetails, getPokemons} from '../actions/action';
import {RootStore} from '../store';

const initialState: InitialState = {
  loading: false,
  pokemons: null,
  success: false,
  pokemon: null,
  pokemonStats: null,
};

export const reducer = createSlice({
  name: 'global',
  initialState,
  reducers: {
    deleteUser: (state: InitialState, action: PayloadAction<number>) => {
      if (state.pokemons) {
        // state.pokemons = state.pokemons.filter(
        //   (item: User, index: number) => item.id !== action.payload,
        // );
      }
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getPokemons.pending, (state: InitialState) => {
        state.loading = true;
        state.success = false;
      })
      .addCase(getPokemons.fulfilled, (state, action) => {
        console.log('action.payload.data: ', action.payload.data);
        if (!action.payload.error) {
          state.pokemons = action.payload.data.results;
          state.success = true;
        } else {
          state.success = true;
          state.pokemons = null;
        }
        state.loading = false;
      })
      .addCase(getPokemons.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
      })
      .addCase(getPokemonDetails.pending, (state: InitialState) => {
        state.loading = true;
        state.success = false;
      })
      .addCase(getPokemonDetails.fulfilled, (state, action) => {
        if (!action.payload.error) {
          state.pokemonStats = action.payload.data.stats;
          state.success = true;
        } else {
          state.success = true;
          state.pokemonStats = null;
        }
        state.loading = false;
      })
      .addCase(getPokemonDetails.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
      });
  },
});

export const {deleteUser} = reducer.actions;

export default reducer.reducer;
