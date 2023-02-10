import axios from "axios";

const pokemonInfo = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/pokemon',
});

export default pokemonInfo;