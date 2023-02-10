import {Pokemon} from "../../interfaces/pokemon";
import {getStorage, KeyLocalStorage} from "./localStorage";


export interface PokemonState {
    isLoading: boolean;
    pokemons: Pokemon[],
    pokemonFav: Pokemon[],
    pokemonTeam: Pokemon[],
    currentPage: number
}

function state(): PokemonState {
    const pokemonFav = getStorage(KeyLocalStorage.favorite)
    const pokemonTeam = getStorage(KeyLocalStorage.team)
    return {
        isLoading: true,
        pokemons: [],
        pokemonFav,
        pokemonTeam,
        currentPage: 1
    }
}

export default state;