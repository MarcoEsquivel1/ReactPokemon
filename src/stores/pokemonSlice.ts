import { createSlice } from "@reduxjs/toolkit";
import {pokemonInterface} from "../interfaces/pokemon"

interface initialStateInterface {
    pokemonId: number;
    showPokemon: boolean;
    pokemon: pokemonInterface;
    showAnswer: boolean;
    message: string;
    pokemonsArray: pokemonInterface[];
    selection: number;
    loading: boolean;
}

const initialState: initialStateInterface = {
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
        setPokemonId: (state, action) => {
            state.pokemonId = action.payload;
        },
        setShowPokemon: (state, action) => {
            state.showPokemon = action.payload;
        },
        setPokemon: (state, action) => {
            state.pokemon = action.payload;
        },
        setShowAnswer: (state, action) => {
            state.showAnswer = action.payload;
        },
        setMessage: (state, action) => {
            state.message = action.payload;
        },
        setPokemonsArray: (state, action) => {
            state.pokemonsArray = action.payload;
        },
        setSelection: (state, action) => {
            state.selection = action.payload;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        newGame: (state) => {
            state.pokemonId = 0,
            state.showPokemon = false,
            state.pokemon = {} as pokemonInterface,
            state.showAnswer = false,
            state.message = "",
            state.pokemonsArray = [],
            state.selection = 0,
            state.loading = false
            console.log("New game");
        }
    },
});

export const { setPokemonId, setShowPokemon, setPokemon, setShowAnswer, setMessage, setPokemonsArray, setSelection, setLoading, newGame } = pokemonSlice.actions;
export default pokemonSlice.reducer;