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
}

const initialState: initialStateInterface = {
    pokemonId: 0,
    showPokemon: false,
    pokemon: {} as pokemonInterface,
    showAnswer: false,
    message: "",
    pokemonsArray: [],
    selection: 0,
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
        newGame: (state) => {
            state.pokemonId = 0,
            state.showPokemon = false,
            state.pokemon = {} as pokemonInterface,
            state.showAnswer = false,
            state.message = "",
            state.pokemonsArray = [],
            state.selection = 0,
            console.log("New game");
        }
    },
});

export const { setPokemonId, setShowPokemon, setPokemon, setShowAnswer, setMessage, setPokemonsArray, setSelection, newGame } = pokemonSlice.actions;
export default pokemonSlice.reducer;