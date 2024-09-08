<template>
  <!-- Full Container -->

  <div class="flex flex-col w-[100vw] h-full md:flex-row">
    <!-- Left section of the screen: Mapping -->

    <main class="w-full h-[50%] md:w-[55%] lg:w-[60%] md:h-full">
      <Map
        v-if="!loading"
        :center="mapCenter"
        :pokemons="dataSet"
        @handleMapClick="collectMapPosition"
      />
    </main>

    <!-- Right section of the screen: Form -->

    <aside
      class="p-0 w-full h-[50%] md:w-[45%] lg;w-[40%] md:h-full bg-[var(--secondary)]"
    >
      <!-- Container -->

      <div class="flex flex-col w-full h-full p-8 bg-[var(--primary)] md:p-16">
        <h1 class="self-start ml-0 justify-self-start">PokéPeak</h1>
        <div class="flex flex-col items-center w-full h-full justify-evenly">
          <!-- Buttons Container -->

          <div
            class="flex justify-between w-[90%] h-16 text-lg md:w-[90%] lg:w-[65%]"
          >
            <!-- First Button -->
            <button
              :class="{
                'w-2/5 md:w-[45%] rounded-full p-0 flex transition-all duration-300 ease-in-out': true,
                'bg-[var(--tertiary)] font-bold': isSearching,
              }"
              @click="setSearching(true)"
            >
              <p
                :class="{
                  'w-full h-full flex flex-col items-center justify-center transition-all duration-300 ease-in-out': true,
                  'w-[65%] rounded-full bg-[var(--secondary)]': isSearching,
                }"
              >
                Peak
              </p>
              <div
                v-if="isSearching"
                class="h-full w-[35%] items-center justify-center transition-all duration-400 ease-in-out hidden lg:flex"
              >
                <img :src="find" alt="" class="size-8" />
              </div>
            </button>
            <!-- Second Button -->
            <button
              :class="{
                'w-2/5 md:w-[45%] rounded-full flex transition-all duration-300 ease-in-out': true,
                'bg-[var(--tertiary)] font-bold': !isSearching,
              }"
              @click="setSearching(false)"
            >
              <div
                v-if="!isSearching"
                class="h-full w-[35%] items-center justify-center transition-all duration-300 ease-in-out hidden lg:flex"
              >
                <img :src="log" alt="" class="size-8" />
              </div>
              <p
                :class="{
                  'w-full h-full flex flex-col items-center justify-center transition-all duration-400 ease-in-out': true,
                  'w-[65%] rounded-full bg-[var(--secondary)]': !isSearching,
                }"
              >
                Log
              </p>
            </button>
          </div>

          <!-- Form Container -->
          <SearchForm v-if="isSearching" @submit="handleSearch" />
          <LogForm v-else @submit="handleLog" />
          <!-- Carousel Container -->

          <Carousel />
        </div>
      </div>
    </aside>
  </div>
</template>

<script setup lang="ts">
import { Map, Carousel, SearchForm, LogForm } from "./components";
import { ref, onMounted } from "vue";
import {
  createGlobalData,
  getGlobalData,
  PokemonData,
  pushToGlobalData,
  searchData,
  searchFormData,
} from "./data/data";
import { getPokemonData } from "./apis/pokeApi";
import { getLatLng, getLocation } from "./apis/geocodingApi";
import { find, log } from "./assets";

const globalData = ref<PokemonData[]>([]);
const dataSet = ref<PokemonData[]>(globalData.value);
const mapCenter = ref({ lat: 6.5244, lng: 3.3792 });
const loading = ref(true);

const initializeGlobalData = async () => {
  const data = await getGlobalData();
  if (!data) {
    await createGlobalData();
    console.log("Data created");
    globalData.value = [];
  } else {
    console.log("Data fetched");
    // console.log(data);
    globalData.value = data;
  }
  dataSet.value = globalData.value;
  loading.value = false;
};
onMounted(() => {
  initializeGlobalData();
});

// For searching
const isSearching = ref(true);
const setSearching = (value: boolean) => {
  isSearching.value = value;
};

const handleSearch = async (form: searchFormData) => {
  try {
    dataSet.value = await searchData(form);
    // console.log(dataSet.value);
    if (form.location) {
      const coordinates = await getLatLng(form.location);
      mapCenter.value = coordinates;
      // console.log(mapCenter.value);
    }
  } catch (error) {
    console.error(error);
  }
};

// For logging

type logFormData = {
  name: string;
  level: number;
  nickname?: string;
  description: string;
};

const loggedData = ref({
  position: { lat: 0, lng: 0 }, // from map
  content: {
    id: 0, // from API
    name: "", // from form
    nickname: "", // from form
    type: "", // from API
    level: 0, // from form
    img: "", // from API
    location: "", // from API
    description: "", // from form
  },
});

const collectMapPosition = (position: { lat: number; lng: number }) => {
  // console.log(position);
  loggedData.value.position = position;
};

const handleLog = async (logForm: logFormData) => {
  // console.log(logForm);

  try {
    const pokemon_data = await getPokemonData(logForm.name);
    // console.log(pokemon_data); // [id, type, img]
    if (pokemon_data) {
      loggedData.value.content = {
        id: pokemon_data[0],
        name: logForm.name,
        nickname: logForm.nickname ?? "",
        type: pokemon_data[1],
        level: logForm.level,
        img: pokemon_data[2],
        location: "",
        description: logForm.description,
      };
      if (loggedData.value.position) {
        const location = await getLocation(
          `${loggedData.value.position.lat}, ${loggedData.value.position.lng}`
        );
        loggedData.value.content.location = location;
      }
    }
    if (isDataComplete(loggedData.value)) {
      pushToGlobalData(loggedData.value);
      // console.log(loggedData.value);
      console.log("Data logged successfully");
      await refreshData();
    }
  } catch (error) {
    console.error("Error fetching Pokémon or location data:", error);
  }
};

// Function to check if data is complete

const isDataComplete = (data: typeof loggedData.value) => {
  return (
    data.content.id !== 0 &&
    data.content.name !== "" &&
    data.content.type !== "" &&
    data.content.level !== 0 &&
    data.content.img !== "" &&
    data.content.location !== "" &&
    data.content.description !== "" &&
    data.position.lat !== 0 &&
    data.position.lng !== 0
  );
};

// Function to refresh data after Log

const refreshData = async () => {
  const data = await getGlobalData();
  if (data) {
    globalData.value = data;
    dataSet.value = globalData.value;
  }
};
</script>
