<template>
  <form
    @submit="handleSubmit"
    action="#"
    class="flex flex-col self-center justify-between w-[90%] h-[50%] md:w-[80%] lg:w-[65%]"
  >
    <p class="">Spotted a pokemon? Log it in.</p>

    <div
      class="grid grid-cols-2 gap-8 w-full md:justify-between md:flex md:gap-0 md:flex-col md:h-[65%]"
    >
      <div class="flex flex-col h-full justify-evenly md:h-1/4">
        <label for="name">Name</label>
        <input
          type="text"
          id="name"
          v-model="logForm.name"
          placeholder="What did you see?"
          required
        />
      </div>
      <div class="flex flex-col h-full justify-evenly md:h-1/4">
        <label for="level">Level</label>
        <input type="number" id="level" v-model="logForm.level" required />
      </div>
      <div class="flex flex-col h-full justify-evenly md:h-1/4">
        <label for="nick-name">Nickname</label>
        <input
          type="text"
          id="nick-name"
          v-model="logForm.nickname"
          placeholder="Give your spot a name"
          required
        />
      </div>
      <div class="flex flex-col h-full justify-evenly md:h-1/4">
        <label for="nick-name">Description</label>
        <input
          type="text"
          id="description"
          v-model="logForm.description"
          placeholder="Describe your spot"
          required
        />
      </div>
    </div>

    <button
      type="submit"
      class="flex self-end size-16 rounded-full go bg-[var(--color-yellow)] items-center justify-center"
    >
      GO
    </button>
  </form>
</template>
<script setup lang="ts">
import { ref } from "vue";

const logForm = ref({
  name: "",
  level: null,
  nickname: "",
  description: "",
});

const emit = defineEmits(["submit"]);
const handleSubmit = (e: Event) => {
  e.preventDefault();
  emit("submit", logForm.value);
  clearForm();
};

// Function to clear the form after submission
const clearForm = () => {
  logForm.value = {
    name: "",
    level: null,
    nickname: "",
    description: "",
  };
};
</script>
<script lang="ts">
export default {
  name: "LogForm",
};
</script>
