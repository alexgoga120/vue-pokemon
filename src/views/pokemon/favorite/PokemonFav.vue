<template>
  <v-row>
    <v-col v-for="pokemon in pokemons" :key="pokemon.name"
           cols="auto">
      <Suspense>
        <template #default>
          <PokemonCard :pokemon-loaded="pokemon"/>
        </template>
        <template #fallback>
          <PokemonCardSkeleton/>
        </template>
      </Suspense>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import PokemonCard from "../../../components/pokemon/cards/PokemonCard.vue";
import PokemonCardSkeleton from "../../../components/pokemon/cards/PokemonCardSkeleton.vue";
import {usePokeomonStore} from "../../../composables";
import {Pokemon} from "../../../interfaces/pokemon";

const {getPokemonsFav: pokemons} = usePokeomonStore()

</script>

<style scoped>

</style>