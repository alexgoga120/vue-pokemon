import {Pokemon} from "../../interfaces/pokemon";

export const KeyLocalStorage = {
    favorite: 'pokemon-favorites',
    team: 'pokemon-team'
}


export const saveStorage = function (key: string, data: Pokemon[]) {
    localStorage.setItem(key, JSON.stringify(data));
};
export const getStorage = function (key: string) {
    const local = localStorage.getItem(key);
    if (local) {
        return JSON.parse(local)
    }
    return []
};

export const clearStorage = function (key: string) {
    const local = localStorage.getItem(key);
    if (local) {
        localStorage.removeItem(key);
    } else {
        localStorage.clear();
    }
}