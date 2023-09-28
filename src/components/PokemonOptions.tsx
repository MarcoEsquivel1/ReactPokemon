import { useSelector } from 'react-redux';
import '../css/pokemonoptions.css';
import { RootState, useAppDispatch } from '../stores/store';
import { setSelection } from '../stores/pokemonSlice';
import { pokemonInterface } from '../interfaces/pokemon'; // Asegúrate de importar la interfaz pokemonInterface desde tu ubicación correcta

export const PokemonOptions = () => {
    const pokemon = useSelector((state: RootState) => state.pokemon);
    const dispatch = useAppDispatch();

    const handleClick = (e: React.MouseEvent<HTMLLIElement>) => {
        const pokemonName = e.currentTarget.innerHTML;
        const pokemonSelected = pokemon.pokemonsArray.find((pokemon: pokemonInterface) => pokemon.name === pokemonName);
        if (pokemonSelected) {
            dispatch(setSelection(pokemonSelected.id));
        }
    };

    return (
        <>
            <div className='options-container'>
                <ul>
                    {pokemon.pokemonsArray.length > 0 &&
                        pokemon.pokemonsArray.map((pokemonLi) => {
                            return (
                                <li key={pokemonLi.id} onClick={handleClick}>
                                    {pokemonLi.name}
                                </li>
                            );
                        })}
                </ul>
            </div>
        </>
    );
};

