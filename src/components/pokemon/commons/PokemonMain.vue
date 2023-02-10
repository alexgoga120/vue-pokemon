<template>
  <v-main :scrollable="true">
    <v-container fluid class="fill-height">
      <router-view v-slot="{ Component }">
        <keep-alive>
          <Suspense>
            <template #default>
              <component :is="Component"/>
            </template>
            <template #fallback>
              <div class="d-flex justify-center align-center fill-height w-100">
                <v-progress-circular indeterminate
                                     size="150"
                                     width="15"/>
              </div>
            </template>
          </Suspense>
        </keep-alive>
      </router-view>
    </v-container>
  </v-main>
</template>

<script>
export default {
  name: "PokemonMain"
}
</script>

<style scoped>

</style>