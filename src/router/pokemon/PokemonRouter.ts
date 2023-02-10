import PokemonCatalog from "../../views/pokemon/catalog/PokemonCatalog.vue";
import PokemonFav from "../../views/pokemon/favorite/PokemonFav.vue";
import PokemonTeam from "../../views/pokemon/team/PokemonTeam.vue";

export const PokemonRouter = [
    {
        path: 'catalog',
        name: 'view.pokemon.catalog',
        component: PokemonCatalog
    },
    {
        path: 'team',
        name: 'view.pokemon.team',
        component: PokemonTeam
    },
    {
        path: 'favorite',
        name: 'view.pokemon.favorite',
        component: PokemonFav
    }
]