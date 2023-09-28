import { configureStore, Store} from "@reduxjs/toolkit";
import pokemonReducer from "./pokemonSlice";
import { useDispatch } from "react-redux";

// Define el estado global de tu aplicación
export interface RootState {
    pokemon: ReturnType<typeof pokemonReducer>;
}

// Crea la tienda con la configuración y el reducer
export const store: Store<RootState> = configureStore({
    reducer: {
        pokemon: pokemonReducer,
    },
});

// Tipo para el despacho de acciones
export type AppDispatch = typeof store.dispatch;

// Exporta el despacho de acciones para su uso en componentes
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
