export interface PokemonResponse {
    count: number;
    next: null | string;
    previous: null | string;
    results: BasicInfo;
}

export interface Pokemon {
    abilities: PokemonAbility[];
    base_experience: number;
    forms: BasicInfo;
    game_indices: GameIndice[];
    height: number;
    held_items: PokemonHeldItem[];
    id: number;
    is_default: false;
    location_area_encounters: URL;
    moves: PokemonMoves[];
    name: string;
    order: number;
    past_types: Array<any>;
    species: BasicInfo;
    sprites: PokemonSprite;
    stats: PokemonStats[];
    types: PokemonType;
    weight: number;

}

export interface PokemonAbility {
    ability: BasicInfo;
    is_hidden: boolean;
    slots: number
}

export interface GameIndice {
    game_index: number;
    version: BasicInfo
}

export interface PokemonHeldItem {
    item: BasicInfo;
    version_details: {
        rarity: number
        version: BasicInfo
    }
}

export interface PokemonMoves {
    move: BasicInfo;
    version_group_details: VersionGroupDetail[]
}

export interface VersionGroupDetail {
    level_learned_at: number;
    move_learn_method: BasicInfo;
    version_group: BasicInfo;
}

export interface PokemonSprite {
    back_default: URL | null;
    back_female: URL | null;
    back_shiny: URL | null;
    back_shiny_female: URL | null;
    front_default: URL | null;
    front_female: URL | null;
    front_shiny: URL | null;
    front_shiny_female: URL | null;
    others: {
        "dream_world": {
            "front_default": URL | null
            "front_female": URL | null
        },
        "home": {
            "front_default": URL | null
            "front_female": URL | null
            "front_shiny": URL | null
            "front_shiny_female": URL | null
        },
        "official-artwork": {
            "front_default": URL | null
            "front_shiny": URL | null
        }
    };
    version: {
        "generation-i": {
            "red-blue": {
                "back_default": URL | null
                "back_gray": URL | null
                "back_transparent": URL | null
                "front_default": URL | null
                "front_gray": URL | null
                "front_transparent": URL | null
            },
            "yellow": {
                "back_default": URL | null
                "back_gray": URL | null
                "back_transparent": URL | null
                "front_default": URL | null
                "front_gray": URL | null
                "front_transparent": URL | null
            }
        },
        "generation-ii": {
            "crystal": {
                "back_default": URL | null
                "back_shiny": URL | null
                "back_shiny_transparent": URL | null
                "back_transparent": URL | null
                "front_default": URL | null
                "front_shiny": URL | null
                "front_shiny_transparent": URL | null
                "front_transparent": URL | null
            },
            "gold": {
                "back_default": URL | null
                "back_shiny": URL | null
                "front_default": URL | null
                "front_shiny": URL | null
                "front_transparent": URL | null
            },
            "silver": {
                "back_default": URL | null
                "back_shiny": URL | null
                "front_default": URL | null
                "front_shiny": URL | null
                "front_transparent": URL | null
            }
        },
        "generation-iii": {
            "emerald": {
                "front_default": URL | null
                "front_shiny": URL | null
            },
            "firered-leafgreen": {
                "back_default": URL | null
                "back_shiny": URL | null
                "front_default": URL | null
                "front_shiny": URL | null
            },
            "ruby-sapphire": {
                "back_default": URL | null
                "back_shiny": URL | null
                "front_default": URL | null
                "front_shiny": URL | null
            }
        },
        "generation-iv": {
            "diamond-pearl": {
                "back_default": URL | null
                "back_female": URL | null
                "back_shiny": URL | null
                "back_shiny_female": URL | null
                "front_default": URL | null
                "front_female": URL | null
                "front_shiny": URL | null
                "front_shiny_female": URL | null
            },
            "heartgold-soulsilver": {
                "back_default": URL | null
                "back_female": URL | null
                "back_shiny": URL | null
                "back_shiny_female": URL | null
                "front_default": URL | null
                "front_female": URL | null
                "front_shiny": URL | null
                "front_shiny_female": URL | null
            },
            "platinum": {
                "back_default": URL | null
                "back_female": URL | null
                "back_shiny": URL | null
                "back_shiny_female": URL | null
                "front_default": URL | null
                "front_female": URL | null
                "front_shiny": URL | null
                "front_shiny_female": URL | null
            }
        },
        "generation-v": {
            "black-white": {
                "animated": {
                    "back_default": URL | null
                    "back_female": URL | null
                    "back_shiny": URL | null
                    "back_shiny_female": URL | null
                    "front_default": URL | null
                    "front_female": URL | null
                    "front_shiny": URL | null
                    "front_shiny_female": URL | null
                },
                "back_default": URL | null
                "back_female": URL | null
                "back_shiny": URL | null
                "back_shiny_female": URL | null
                "front_default": URL | null
                "front_female": URL | null
                "front_shiny": URL | null
                "front_shiny_female": URL | null
            }
        },
        "generation-vi": {
            "omegaruby-alphasapphire": {
                "front_default": URL | null
                "front_female": URL | null
                "front_shiny": URL | null
                "front_shiny_female": URL | null
            },
            "x-y": {
                "front_default": URL | null
                "front_female": URL | null
                "front_shiny": URL | null
                "front_shiny_female": URL | null
            }
        },
        "generation-vii": {
            "icons": {
                "front_default": URL | null
                "front_female": URL | null
            },
            "ultra-sun-ultra-moon": {
                "front_default": URL | null
                "front_female": URL | null
                "front_shiny": URL | null
                "front_shiny_female": URL | null
            }
        },
        "generation-viii": {
            "icons": {
                "front_default": URL | null
                "front_female": URL | null
            }
        }
    }
}

export interface PokemonStats {
    base_stat: number,
    effort: number,
    stat: BasicInfo
}

export interface PokemonType {
    slot: number,
    type: BasicInfo
}

export type BasicInfo = {
    name: string;
    url: URL;
}