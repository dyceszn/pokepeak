<script setup lang="ts">
import Carousel from "./components/Carousel.vue";
</script>

<template>
  <!-- Full Container -->

  <div class="flex flex-col w-[100vw] h-full md:flex-row">
    <!-- Left section of the screen: Mapping -->

    <main class="w-full h-1/2 md:w-[55%] md:h-full"></main>

    <!-- Right section of the screen: Form -->

    <aside
      class="flex items-center justify-center p-0 w-full h-1/2 md:w-[45%] md:h-full lg:p-12"
    >
      <!-- Rounded Container -->

      <div
        class="flex flex-col w-full h-full p-8 bg-[var(--primary)] rounded-t-3xl md:p-16 md:rounded-l-3xl md:rounded-tr-none lg:rounded-3xl"
      >
        <h1 class="self-start ml-0 justify-self-start">PokéPeak</h1>
        <div class="flex flex-col items-center w-full h-full justify-evenly">
          <!-- Buttons Container -->

          <div class="flex justify-between w-[90%] h-16 text-lg md:w-[65%]">
            <button class="w-2/5 border border-black rounded-full">Peak</button>
            <button class="w-2/5 rounded-full">Log</button>
          </div>

          <!-- Form Container -->
          <form
            action="#"
            class="flex flex-col self-center justify-between w-[90%] h-[50%] md:w-[80%] lg:w-[65%]"
          >
            <p class="">Discover pokemon in your area.</p>

            <div
              class="grid grid-cols-2 gap-8 w-full md:justify-between md:flex md:gap-0 md:flex-col md:h-[65%]"
            >
              <div class="flex flex-col justify-evenly h-1/4">
                <label for="name">Name</label>
                <input type="text" id="name" />
              </div>
              <div class="flex flex-col justify-evenly h-1/4">
                <label for="level">Level</label>
                <input type="number" id="level" />
              </div>
              <div class="flex flex-col justify-evenly h-1/4">
                <label for="location">Location</label>
                <input type="text" id="location" />
              </div>
              <div class="flex flex-col justify-evenly h-1/4">
                <label for="nick-name">Nickname</label>
                <input type="text" id="nick-name" />
              </div>
            </div>

            <button
              type="submit"
              class="self-end w-16 h-16 border border-black rounded-full"
            >
              GO
            </button>
          </form>

          <!-- Carousel Container -->

          <Carousel />
        </div>
      </div>
    </aside>
  </div>
</template>
