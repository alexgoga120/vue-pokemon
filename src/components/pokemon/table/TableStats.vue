<template>
  <v-row>
    <v-col cols="12">
      <v-table fixed-header
               height="300px"
      >
        <thead>
        <tr>
          <th class="text-left" style="width: 100px">

          </th>
          <th class="text-left">
            Base Stats
          </th>
        </tr>
        </thead>
        <tbody>
        <tr
            v-for="stat in stats"
            :key="stat.stat.name"
        >
          <td class="font-weight-bold">{{ stat.stat.name }}</td>
          <StatsPercent :stat="stat"></StatsPercent>
        </tr>
        </tbody>
      </v-table>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import {PokemonStats} from "../../../interfaces/pokemon";
import StatsPercent from "./StatsPercent.vue";
import {onMounted} from "vue";

type TableStatsProps = {
  stats: PokemonStats[]
}
const {stats}: TableStatsProps = defineProps<TableStatsProps>();

</script>
