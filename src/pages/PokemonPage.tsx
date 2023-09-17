import { useEffect } from "react";
import { PokemonPicture } from "../components/PokemonPicture";
import getPokemonOptions from "../helpers/getPokemonOptions";
import { setPokemonsArray, setPokemon, setPokemonId, setShowPokemon, setMessage, setShowAnswer, newGame } from "../stores/pokemonSlice";
import { useSelector } from 'react-redux';
import { PokemonState, useAppDispatch } from "../stores/store";
import { getPokemonFromArray } from "../services/pokemonServices";
import { PokemonOptions } from "../components/PokemonOptions";

export const PokemonPage = () => {
    const pokemon = useSelector((state: PokemonState) => state.pokemon);
    const dispatch = useAppDispatch();

    const fetchData = async () => {
        console.log("Fetching data...");
        const pokemonArray = await getPokemonOptions();
        dispatch(setPokemonsArray(pokemonArray));

        if (pokemonArray.length > 0) {
            const pokemonSelected = getPokemonFromArray(pokemonArray);
            console.log("Selected Pokemon:", pokemonSelected);
            dispatch(setPokemon(pokemonSelected));
            dispatch(setPokemonId(pokemonSelected.id));
        }

        console.log("Data fetched!");
    }

    useEffect(() => {
        fetchData();
    }, [dispatch]);

    const resetGame = () => {
        console.log("Resetting game...");
        dispatch(newGame());
        fetchData();
    }

    //useEffect when pokemon.selection changes, if it is different from 0, check if it is the correct pokemon
    useEffect(() => {
        if (pokemon.selection !== 0) {
            dispatch(setShowAnswer(true));
            dispatch(setShowPokemon(true));
            if (pokemon.selection === pokemon.pokemonId) {
                dispatch(setMessage(`Yes! It's ${pokemon.pokemon?.name}`));
            } else {
                dispatch(setMessage(`Opps, you are wrong! It's ${pokemon.pokemon?.name}`));
            }
        }
    }, [pokemon.selection]);

    return (
        <>
            <div>
                <h1>Who is this Pokemon?</h1>
                {
                    pokemon.pokemonId != 0 && 
                    <>
                        <PokemonPicture /> 
                        {
                            !pokemon.showPokemon &&
                            <PokemonOptions />
                        }
                        {
                            pokemon.showAnswer && <h2>{ pokemon.message }</h2>
                        }
                    </>
                }
                <button style={{marginTop: 30, backgroundColor: '#c0c0c0'}} onClick={resetGame}>New Game</button>
            </div>
        </>
    )
};




