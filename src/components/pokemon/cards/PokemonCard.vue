<template>
  <v-card theme="light" min-width="430" max-width="430">
    <v-card-title class="d-flex justify-space-between align-center">
      <span class="font-weight-bold text-h5">{{ pokemonName }}</span>

      <v-btn icon theme="dark"
             @click="markFav"
             :loading="isLoadingFav"
      >
        <v-icon v-if="isFav" color="grey">
          mdi-star-off
        </v-icon>
        <v-icon v-else color="yellow-darken-2">
          mdi-star
        </v-icon>
      </v-btn>
    </v-card-title>
    <v-img
        :src="pokemonData.sprites.front_default.toString()"
        height="200px"
    ></v-img>

    <v-card-text class="d-flex justify-end">
      <v-btn icon theme="dark"
             @click="markTeam"
             :loading="isLoadingTeam"
      >
        <v-icon v-if="inTeam" color="grey">
          mdi-bag-personal-off
        </v-icon>
        <v-icon v-else color="red">
          mdi-bag-personal
        </v-icon>
      </v-btn>
    </v-card-text>

    <v-card-actions>
      <v-btn color="red"
             variant="text"
             @click="showInfo = !showInfo"
      >
        Info
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn
          :icon="showInfo ? 'mdi-chevron-up' : 'mdi-chevron-down'"
          @click="showInfo = !showInfo"
      ></v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="showInfo">
        <v-divider></v-divider>
        <v-card-text>
          <v-row class="text-h6">
            <v-col cols="6">
              <span class="font-weight-bold">Height:</span> {{ pokemonData.height / 10 }} m.
            </v-col>
            <v-col cols="6">
              <span class="font-weight-bold">Weight:</span> {{ pokemonData.weight / 10 }} Kg.
            </v-col>
          </v-row>
          <TableStats :stats="pokemonData.stats"/>
        </v-card-text>
      </div>
    </v-expand-transition>

    <v-dialog
        v-model="dialog"
        persistent
        width="auto"
    >
      <v-card>
        <v-card-title class="text-h4 text-red text-center">
          Your team is complete!
        </v-card-title>
        <v-card-text>
          Please, delete some pokemon from your team first
        </v-card-text>
        <v-card-actions class="d-flex justify-center">
          <v-btn color="primary" @click="dialog = false">
            Close Dialog
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-card>
</template>

<script setup lang="ts">
import {BasicInfo, Pokemon} from "../../../interfaces/pokemon";
import {pokemonInfo} from "../../../apis";
import {ref} from "vue";
import TableStats from "../table/TableStats.vue";
import {usePokeomonStore} from "../../../composables";

type CardProps = {
  pokemon?: BasicInfo;
  pokemonLoaded?: Pokemon;
}

const {pokemon, pokemonLoaded} = defineProps<CardProps>();
const showInfo = ref<Boolean>(false);
const isLoadingFav = ref<boolean>(false);
const isLoadingTeam = ref<boolean>(false);

const dialog = ref(false);

const getPokemonData = async () => {
  if (pokemon) {
    const {data: pokemonData}: { data: Pokemon } = await pokemonInfo.get<Pokemon>(`${pokemon.name}`);
    return pokemonData
  }
  return pokemonLoaded!;
}

let pokemonData: Pokemon = await getPokemonData();

const pokemonName = pokemon ? pokemon.name : pokemonLoaded!.name

const {
  addPokemonFav,
  addPokemonTeam,
  isFavPokemon,
  inTeamPokemon,
  removePokemonFav,
  removePokemonTeam
} = usePokeomonStore();

const isFav = isFavPokemon(pokemonName)
const inTeam = inTeamPokemon(pokemonName)
const markFav = async () => {
  isLoadingFav.value = true;
  if (isFav.value) {
    await removePokemonFav(pokemonName);
  } else {
    await addPokemonFav(pokemonData);
  }
  isLoadingFav.value = false;
}

const markTeam = async () => {
  isLoadingTeam.value = true;
  if (inTeam.value) {
    await removePokemonTeam(pokemonName);
  } else {
    const isValid = await addPokemonTeam(pokemonData);
    dialog.value = !isValid
  }
  isLoadingTeam.value = false;
}

</script>

<style scoped>

</style>