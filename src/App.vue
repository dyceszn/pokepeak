<script setup lang="ts">
import Carousel from "./components/Carousel.vue";
</script>

<template>
  <div class="flex w-[100vw] h-full">
    <main class="w-[55%] h-full"></main>

    <aside class="flex items-center justify-center w-[45%] h-full p-12">
      <!-- Rounded Container -->

      <div
        class="flex flex-col w-full h-full p-16 bg-[var(--primary)] rounded-3xl"
      >
        <h1 class="self-start ml-0 justify-self-start">PokéPeak</h1>
        <div class="flex flex-col items-center w-full h-full justify-evenly">
          <div class="flex justify-between w-[65%] h-16 text-lg">
            <button class="w-2/5 border border-black rounded-full">Peak</button>
            <button class="w-2/5 rounded-full">Log</button>
          </div>
          <form
            action="#"
            class="flex flex-col self-center justify-between w-[65%] h-[50%]"
          >
            <p class="">Discover pokemon in your area.</p>
            <div class="flex flex-col w-full h-[65%] justify-between">
              <label for="name">Name</label>
              <input type="text" id="name" />
              <label for="level">Level</label>
              <input type="number" id="level" />
              <label for="location">Location</label>
              <input type="text" id="location" />
              <label for="nick-name">Nickname</label>
              <input type="text" id="nick-name" />
            </div>
            <button
              type="submit"
              class="self-end w-16 h-16 border border-black rounded-full"
            >
              GO
            </button>
          </form>
          <Carousel />
        </div>
      </div>
    </aside>
  </div>
</template>
