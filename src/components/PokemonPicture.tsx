import { useSelector } from 'react-redux';
import '../css/animations.css'
import '../css/pokemonpicture.css'
import { PokemonState } from '../stores/store';

export const PokemonPicture = () => {
    const pokemon = useSelector((state: PokemonState) => state.pokemon);

    return (
        <>
            <div className='pokemon-container'>
                {
                    pokemon.pokemonId !== 0 && pokemon.showPokemon ? (
                        <img className='fade-in' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.pokemonId}.svg`} alt='pokemon' />
                    ) : (
                        <img className='hidden-pokemon' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.pokemonId}.svg`} alt='pokemon' />
                    )
                }
            </div>
        </>
    )
};