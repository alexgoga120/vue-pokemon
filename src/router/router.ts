import {createRouter, createWebHashHistory, createWebHistory} from 'vue-router'
import AboutView from "../views/about/AboutView.vue";
import PokemonView from "../views/pokemon/PokemonView.vue";
import {PokemonRouter} from "./pokemon/PokemonRouter";

const routes = [
    {
        path: '/pokemon',
        name: 'view.pokemon',
        component: PokemonView,
        children: PokemonRouter
    },
    {
        path: '/about',
        name: 'view.about',
        component: AboutView
    },
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})