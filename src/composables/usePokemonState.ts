import {computed} from 'vue';
import {useStore} from 'vuex';
import {StateInterface} from '../store/store';
import {BasicInfo, Pokemon} from "../interfaces/pokemon";


export const usePokeomonStore = () => {

    const store = useStore<StateInterface>();

    return {
        // State

        // isLoading: computed(() => store.state.pokemon.isLoading),
        // pokemon: computed(() => store.state.pokemon.pokemons),

        // Getters
        getPokemons: computed<BasicInfo[]>(() => store.getters["pokemon/getPokemons"]),
        getPokemonsFav: computed<Pokemon[]>(() => store.getters["pokemon/getPokemonsFav"]),
        isFavPokemon: (name: string) => computed(() => store.getters["pokemon/isFavPokemon"](name)),
        getPokemonsTeam: computed<Pokemon[]>(() => store.getters["pokemon/getPokemonsTeam"]),
        inTeamPokemon: (name: string) => computed(() => store.getters["pokemon/inPokemonTeam"](name)),

        // Actions
        getPokemonPage: (page: number) => store.dispatch('pokemon/getAllPokemons', page),
        addPokemonFav: (pokemon: Pokemon) => store.dispatch('pokemon/addPokemonFav', pokemon),
        removePokemonFav: (query = '') => store.dispatch('pokemon/removePokemonFav', query),
        addPokemonTeam: (pokemon: Pokemon) => store.dispatch('pokemon/addPokemonTeam', pokemon),
        removePokemonTeam: (query = '') => store.dispatch('pokemon/removePokemonTeam', query),

        // Mutations

    }
}