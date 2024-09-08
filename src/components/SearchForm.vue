<template>
  <form
    @submit="handleSubmit"
    action="#"
    class="flex flex-col self-center justify-between w-[90%] h-[50%] md:w-[80%] lg:w-[65%]"
  >
    <p class="">Discover pokemon in your area.</p>

    <div
      class="grid grid-cols-2 gap-8 w-full md:justify-between md:flex md:gap-0 md:flex-col md:h-[65%]"
    >
      <div class="flex flex-col h-full justify-evenly md:h-1/4">
        <label for="name">Name</label>
        <input
          type="text"
          id="name"
          v-model="form.name"
          required
          placeholder="What are you looking for?"
        />
      </div>
      <div class="flex flex-col h-full justify-evenly md:h-1/4">
        <label for="level">Level</label>
        <input type="number" id="level" v-model="form.level" required />
      </div>
      <div class="flex flex-col h-full justify-evenly md:h-1/4">
        <label for="location">Location</label>
        <input
          type="text"
          id="location"
          v-model="form.location"
          placeholder="Narrow your search"
        />
      </div>
      <div class="flex flex-col h-full justify-evenly md:h-1/4">
        <label for="nick-name">Nickname</label>
        <input
          type="text"
          id="nick-name"
          placeholder="Search for a named pokemon"
          v-model="form.nickname"
        />
      </div>
    </div>

    <button type="submit" class="self-end w-16 h-16 rounded-full go">GO</button>
  </form>
</template>
<script setup lang="ts">
import { ref } from "vue";

const form = ref({
  name: "",
  level: null,
  location: "",
  nickname: "",
});

const emit = defineEmits(["submit"]);
const handleSubmit = (e: Event) => {
  e.preventDefault();
  emit("submit", form.value);
  clearForm();
};

// Function to clear the form after submission
const clearForm = () => {
  form.value = {
    name: "",
    level: null,
    nickname: "",
    location: "",
  };
};
</script>
<script lang="ts">
export default {
  name: "SearchForm",
};
</script>
