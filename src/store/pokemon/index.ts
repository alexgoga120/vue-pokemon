import {Module} from 'vuex';
import {StateInterface} from '../store';

import state, {PokemonState} from './state';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';


const pokemonModule: Module<PokemonState, StateInterface> = {
    namespaced: true,
    actions,
    getters,
    mutations,
    state
}
export default pokemonModule;
