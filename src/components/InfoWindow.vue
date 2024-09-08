<template>
  <div
    class="w-[250px] lg:w-[300px] flex justify-between mb-8 font-['Montserrat']"
  >
    <div class="w-[30%] h-full flex justify-center">
      <img
        :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${content.id}.png`"
        alt=""
        class="rounded-full size-24 lg:size-28 bg-[var(--secondary)]"
      />
    </div>
    <div class="w-[68%] h-full">
      <p class="font-bold">{{ content.nickname }}</p>
      <p class="mt-1 text-xs">ø{{ content.name }}</p>
      <!-- <hr class="w-[80%] border-black" /> -->
      <p class="my-5 overflow-y-scroll text-sm">
        {{ content.description }}
      </p>
      <div class="flex flex-wrap gap-4">
        <p
          class="h-4 rounded-full bg-[var(--secondary)] w-max p-4 flex items-center justify-center text-sm"
        >
          {{ content.type }}
        </p>
        <p
          class="h-4 rounded-full bg-[var(--secondary)] w-max p-4 flex items-center justify-center text-sm"
        >
          lvl. {{ content.level }}
        </p>
        <p
          class="h-4 rounded-full bg-[var(--tertiary)] p-5 flex items-center justify-center text-sm overflow-x-auto overflow-y-hidden"
        >
          <span class="overflow-x-auto whitespace-nowrap w-max">{{
            content.location
          }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    content: {
      type: Object,
      required: true,
    },
  },
};
</script>
