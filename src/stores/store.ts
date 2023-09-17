import { configureStore } from "@reduxjs/toolkit";
import pokemonReducer from "./pokemonSlice";
import { useDispatch } from "react-redux";

export const store = configureStore({
    reducer: {
        pokemon: pokemonReducer,
    },
})

export type PokemonState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch

export default store