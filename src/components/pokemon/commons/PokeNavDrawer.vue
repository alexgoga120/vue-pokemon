<template>
  <v-navigation-drawer
      v-model="drawer"
      :rail="true"
      permanent
  >
    <v-list-item
        prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg"
        title="John Leider"
        nav
    >
      <template v-slot:append>
        <v-btn
            variant="text"
            icon="mdi-chevron-left"
        ></v-btn>
      </template>
    </v-list-item>

    <v-divider></v-divider>

    <v-list density="compact" nav>
      <v-list-item v-for="menu in listMenu" :key="menu.title"
                   :prepend-icon="menu.icon"
                   :title="menu.title"
                   :value="menu.title"
                   :to="menu.route"/>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup lang="ts">

import {Ref, ref} from "vue";

const drawer: Ref<boolean> = ref(true);

const listMenu = [
  {
    icon: "mdi-book-multiple-outline",
    title: 'Catalog',
    route: {name: 'view.pokemon.catalog'}
  },
  {
    icon: "mdi-pokeball",
    title: 'Team',
    route: {name: 'view.pokemon.team'}
  },
  {
    icon: "mdi-star-check-outline",
    title: 'Favorite',
    route: {name: 'view.pokemon.favorite'}
  }
]

</script>

<style scoped>

</style>