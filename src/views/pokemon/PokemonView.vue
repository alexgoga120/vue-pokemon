<template>
  <PokeNavDrawer/>
  <PokemonMain/>
</template>

<script setup lang="ts">
import {useRoute} from "vue-router";
import PokeNavDrawer from "../../components/pokemon/commons/PokeNavDrawer.vue";
import PokemonMain from "../../components/pokemon/commons/PokemonMain.vue";
</script>

<style scoped>

</style>