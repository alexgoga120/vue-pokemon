<template>
  <td>
    <v-row no-gutters justify="center" align="center">
      <v-col cols="3">
        <v-badge v-if="stat.effort > 0" :content="stat.effort">
          <v-chip>{{ stat.base_stat }}</v-chip>
        </v-badge>
        <v-chip v-else>{{ stat.base_stat }}</v-chip>
      </v-col>
      <v-col cols="9">
        <v-progress-linear :color="colorBar" height="15" :model-value="statPercent"/>
      </v-col>
    </v-row>
  </td>
</template>

<script setup lang="ts">
import {PokemonStats} from "../../../interfaces/pokemon";

type StatsPercentProps = {
  stat: PokemonStats
}

const {stat}: StatsPercentProps = defineProps<StatsPercentProps>();

const statPercent = (stat.base_stat * 100) / 255;
const getColorBar = () => {

  if (statPercent > 75) {
    return 'green'
  }
  if (statPercent > 50) {
    return 'greenyellow'
  }
  if (statPercent > 25) {
    return 'yellow'
  }
  return 'red'
}

const colorBar = getColorBar();
</script>

<style scoped>
</style>