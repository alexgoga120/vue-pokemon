<template>
  <v-main>
      <v-container fluid>
        <router-view v-slot="{ Component }">
          <keep-alive>
            <component :is="Component"/>
          </keep-alive>
        </router-view>
      </v-container>
  </v-main>
</template>

<script setup lang="ts">
</script>

<style scoped>

</style>