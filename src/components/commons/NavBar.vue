<template>
  <v-app-bar
      prominent
  >
    <v-toolbar-title> Titulo modulo</v-toolbar-title>

    <v-spacer></v-spacer>

    <div class="d-flex justify-center">
      <v-tabs
          v-model="tab"
          align-tabs="title"
      >
        <v-tab
            v-for="(item, index) in tabItems"
            :key="item"
            :value="index"
        >
          {{ item }}
        </v-tab>
      </v-tabs>
    </div>
  </v-app-bar>
</template>

<script setup lang="ts">
import {useRoute} from "vue-router";
import {ref} from "vue";

const route = useRoute()

const tab = ref(null);
const tabItems = ['Pokemon', 'Rick & morty', 'About'];

</script>

<style scoped>

</style>