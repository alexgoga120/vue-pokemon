import {MutationTree} from 'vuex';
import {PokemonState} from './state';
import {Pokemon} from "../../interfaces/pokemon";
import {KeyLocalStorage, saveStorage} from "./localStorage";


const mutation: MutationTree<PokemonState> = {
    setPokemons(state: PokemonState, pokemon: Pokemon[]) {
        state.pokemons = pokemon
    },

    addPokemonFav(state: PokemonState, pokemon: Pokemon) {
        state.pokemonFav.push(pokemon);
        saveStorage(KeyLocalStorage.favorite, state.pokemonFav)
    },

    removePokemonFav(state: PokemonState, pokemon: Pokemon) {
        const index = state.pokemonFav.indexOf(pokemon);
        state.pokemonFav.splice(index, 1);
        saveStorage(KeyLocalStorage.favorite, state.pokemonFav)
    },

    addPokemonTeam(state: PokemonState, pokemon: Pokemon) {
        state.pokemonTeam.push(pokemon);
        saveStorage(KeyLocalStorage.team, state.pokemonTeam)
    },

    removePokemonTeam(state: PokemonState, pokemon: Pokemon) {
        const index = state.pokemonTeam.indexOf(pokemon);
        state.pokemonTeam.splice(index, 1);
        saveStorage(KeyLocalStorage.team, state.pokemonTeam)
    },
}


export default mutation;