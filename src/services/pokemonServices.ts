import { pokemonInterface } from '../interfaces/pokemon';

export const getPokemonFromArray = (pokemonsArray: pokemonInterface[]) => {
    const rndInt = Math.floor( Math.random() * 4)
    const pokemon:pokemonInterface = pokemonsArray[rndInt]
    return pokemon
}

