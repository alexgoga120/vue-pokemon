<template>
  <v-row justify="end">
    <v-btn v-if="previous"
           @click="prevPage"
           theme="light"
           icon>
      <v-icon>mdi-arrow-left-bold</v-icon>
    </v-btn>
    <v-btn v-if="next"
           @click="nextPage"
           class="mx-6"
           theme="light"
           icon>
      <v-icon>mdi-arrow-right-bold</v-icon>
    </v-btn>
  </v-row>
  <v-row>
    <v-col v-for="pokemon in pokemons" :key="pokemon.name"
           cols="auto">
      <Suspense>
        <template #default>
          <PokemonCard :pokemon="pokemon"/>
        </template>
        <template #fallback>
          <PokemonCardSkeleton/>
        </template>
      </Suspense>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import {usePokeomonStore} from "../../../composables";
import PokemonCard from "../../../components/pokemon/cards/PokemonCard.vue";
import PokemonCardSkeleton from "../../../components/pokemon/cards/PokemonCardSkeleton.vue";
import {PokemonResponse} from "../../../interfaces/pokemon";
import {onBeforeMount, onMounted, ref} from "vue";

const {getPokemons: pokemons, getPokemonPage} = usePokeomonStore()

const getPokemon = async (page: number): Promise<PokemonResponse> => {
  return await getPokemonPage(page);
}

const currentPage = ref<number>(0);
const next = ref<string | null>();
const previous = ref<string | null>();

onMounted(async () => {
  const resp = await getPokemon(currentPage.value)
  next.value = resp.next
  previous.value = resp.previous
})

const nextPage = async () => {
  currentPage.value += 1;
  const resp = await getPokemon(currentPage.value)
  next.value = resp.next
  previous.value = resp.previous
}
const prevPage = async () => {
  currentPage.value -= 1;
  const resp = await getPokemon(currentPage.value)
  next.value = resp.next
  previous.value = resp.previous
}

</script>

<style scoped>

</style>