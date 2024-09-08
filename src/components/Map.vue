<template>
  <GMapMap
    v-if="props.pokemons.length > 0"
    :center="props.center"
    :zoom="12"
    class="w-full h-full"
    @click="handleMapClick"
  >
    <GMapMarker v-if="tempMarker" :position="tempMarker" />
    <GMapMarker
      :key="pokemon.content.id"
      v-for="(pokemon, index) in props.pokemons"
      :position="pokemon.position"
      :icon="{
        url: pokemon.content.img,
        scaledSize: { width: 50, height: 50 },
      }"
      @click="activeMarker = index"
    >
      <GMapInfoWindow v-if="activeMarker === index">
        <InfoWindow :content="pokemon.content" />
      </GMapInfoWindow>
    </GMapMarker>
  </GMapMap>
  <!-- Error Component -->
  <div v-else class="flex items-center justify-center w-full h-full">
    <div
      class="w-[80%] md:w-[50%] lg:w-[40%] max-h-80 border border-black rounded-3xl text-center p-8 overflow-y-auto"
    >
      <p class="font-bold">
        If the map does not load in 10secs, then congrats you have reached an
        error
      </p>
      <p>Here's a few things that could help:</p>
      <ul class="my-4 text-left list-disc list-inside">
        <li>
          Ensure that the Pokémon name you entered is correct and free of
          misspellings.
        </li>
        <li>Verify that the location you provided exists and is accurate.</li>
        <li>Check your internet connection to ensure it is stable.</li>
      </ul>
      <p class="text-sm italic">
        If none of the solutions work. A simple page refresh should get you up
        and running
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import InfoWindow from "./InfoWindow.vue";
import { PokemonData } from "../data/data";

const activeMarker = ref<number | null>(null);

const props = defineProps<{
  center: {
    lat: number;
    lng: number;
  };
  pokemons: PokemonData[];
}>();

// To add Marker on map click
const tempMarker = ref<null | { lat: number; lng: number }>(null);
const emit = defineEmits(["handleMapClick"]);
const handleMapClick = (event: google.maps.MapMouseEvent) => {
  if (event.latLng) {
    const lat = event.latLng.lat();
    const lng = event.latLng.lng();
    const position = { lat: lat, lng: lng };
    tempMarker.value = { lat, lng };
    // console.log(position);
    emit("handleMapClick", position);
  }
};
</script>
<script lang="ts">
export default {
  name: "Map",
};
</script>
