import { useSelector } from 'react-redux';
import '../css/pokemonoptions.css'
import { PokemonState, useAppDispatch } from '../stores/store';
import { setSelection } from "../stores/pokemonSlice";
export const PokemonOptions = () => {
    const pokemon = useSelector((state: PokemonState) => state.pokemon);
    const dispatch = useAppDispatch();

    const handleClick = (e) => {
        const pokemonName = e.target.innerHTML;
        const pokemonSelected = pokemon.pokemonsArray.find((pokemon) => pokemon.name === pokemonName);
        dispatch(setSelection(pokemonSelected?.id));
    }

    return (
        <>
            <div className='options-container'>
                <ul>
                    {
                        pokemon.pokemonsArray.length > 0 && pokemon.pokemonsArray.map((pokemonLi) => {
                            return (
                                <li key={pokemonLi.id} onClick={handleClick}>
                                    {pokemonLi.name}
                                </li>
                            )
                        }
                        )
                    }
                </ul>
            </div>
        </>
    )
};
