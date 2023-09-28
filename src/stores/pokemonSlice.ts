import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { pokemonInterface } from "../interfaces/pokemon";
import { RootState } from "./store"; // Asegúrate de importar la RootState desde donde se defina tu tienda

export interface PokemonState {
    pokemonId: number;
    showPokemon: boolean;
    pokemon: pokemonInterface;
    showAnswer: boolean;
    message: string;
    pokemonsArray: pokemonInterface[];
    selection: number;
    loading: boolean;
}

const initialState: PokemonState = {
    pokemonId: 0,
    showPokemon: false,
    pokemon: {} as pokemonInterface,
    showAnswer: false,
    message: "",
    pokemonsArray: [],
    selection: 0,
    loading: false,
};

export const pokemonSlice = createSlice({
    name: "pokemon",
    initialState,
    reducers: {
        setPokemonId: (state, action: PayloadAction<number>) => {
            state.pokemonId = action.payload;
        },
        setShowPokemon: (state, action: PayloadAction<boolean>) => {
            state.showPokemon = action.payload;
        },
        setPokemon: (state, action: PayloadAction<pokemonInterface>) => {
            state.pokemon = action.payload;
        },
        setShowAnswer: (state, action: PayloadAction<boolean>) => {
            state.showAnswer = action.payload;
        },
        setMessage: (state, action: PayloadAction<string>) => {
            state.message = action.payload;
        },
        setPokemonsArray: (state, action: PayloadAction<pokemonInterface[]>) => {
            state.pokemonsArray = action.payload;
        },
        setSelection: (state, action: PayloadAction<number>) => {
            state.selection = action.payload;
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        },
        newGame: (state) => {
            state.pokemonId = 0;
            state.showPokemon = false;
            state.pokemon = {} as pokemonInterface;
            state.showAnswer = false;
            state.message = "";
            state.pokemonsArray = [];
            state.selection = 0;
            state.loading = false;
            console.log("New game");
        },
    },
});

export const { setPokemonId, setShowPokemon, setPokemon, setShowAnswer, setMessage, setPokemonsArray, setSelection, setLoading, newGame } = pokemonSlice.actions;

// Selector para obtener el estado de Pokémon
export const selectPokemon = (state: RootState) => state.pokemon;

export default pokemonSlice.reducer;
