import {GetterTree} from 'vuex';
import {PokemonState} from './state';
import {StateInterface} from '../store';
import {Pokemon} from "../../interfaces/pokemon";

const getters: GetterTree<PokemonState, StateInterface> = {
    getPokemons(state: PokemonState) {
        return state.pokemons
    },

    getPokemonsFav(state: PokemonState) {
        return state.pokemonFav.sort((a, b) => a.id - b.id);
    },

    getPokemonsTeam(state: PokemonState) {
        return state.pokemonTeam.sort((a, b) => a.id - b.id);
    },

    isFavPokemon: (state: PokemonState) => (name: string) => {
        return state.pokemonFav.some((pokemon: Pokemon) => pokemon.name === name)
    },

    inPokemonTeam: (state: PokemonState) => (name: string) => {
        return state.pokemonTeam.some((pokemon: Pokemon) => pokemon.name === name)
    }
}

export default getters;