import axios from "axios";

const pokemonPage = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/pokemon',
    params: {
        limit: 8
    }
});

export default pokemonPage;
