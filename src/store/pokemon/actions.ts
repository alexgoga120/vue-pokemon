import {ActionTree} from 'vuex';
import {PokemonState} from './state';
import {StateInterface} from '../store';
import {BasicInfo, Pokemon, PokemonResponse} from "../../interfaces/pokemon";
import {pokemonAll, pokemonInfo} from "../../apis";


const actions: ActionTree<PokemonState, StateInterface> = {

    async getAllPokemons({commit, state, getters}, page): Promise<PokemonResponse> {
        const res = await pokemonAll.get<PokemonResponse>('', {
            params: {
                offset: page * 8
            }
        });
        commit('setPokemons', res.data.results)
        return res.data
    },

    addPokemonFav({commit}, pokemon: Pokemon) {
        commit('addPokemonFav', pokemon)
    },

    removePokemonFav({commit, state}, query: string) {
        const pokemon = state.pokemonFav.find((pokemon: Pokemon) => pokemon.name === query);
        commit('removePokemonFav', pokemon)
    },

    addPokemonTeam({commit, state}, pokemon: Pokemon):boolean {
        if (state.pokemonTeam.length === 6){
            return false
        }
        commit('addPokemonTeam', pokemon)
        return true
    },

    removePokemonTeam({commit, state}, query: string) {
        const pokemon = state.pokemonTeam.find((pokemon: Pokemon) => pokemon.name === query);
        commit('removePokemonTeam', pokemon)
    },
}


export default actions;