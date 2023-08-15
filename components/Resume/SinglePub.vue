<template>
  <h3 class="text-xl min-w-fit">{{ props.year }}</h3>
  <div class="flex flex-col gap-2">
    <h3 class="font-bold text-sky-800 lg:text-xl">
      <a :href="props.pdf" target="_blank">{{ props.title }}</a>
    </h3>
    <div class="flex gap-2">
      <p class="text-gray-600">{{ props.journal }}.</p>
      <UIcon
        name="i-solar-map-arrow-square-bold-duotone"
        class="text-2xl transition-all duration-75 ease-linear text-sky-700 hover:translate-x-2 hover:scale-105"
      />
    </div>
    <div class="flex flex-wrap gap-1">
      <span
        class="text-gray-600"
        v-for="(author, index) in props.authors"
        :key="index"
        :class="{ 'text-sky-900 ': author == 'Mehrdad Anvar' }"
        >{{ author }}{{ index < props.authors.length - 1 ? ", " : "." }}</span
      >
    </div>
    <div class="flex gap-2 items-center">
      <span>Abstract</span>
      <UIcon
        name="i-solar-double-alt-arrow-down-line-duotone"
        class="text-lg transition-all duration-150 ease-linear"
        :class="{ 'rotate-0': !isOpen, 'rotate-180': isOpen }"
        @click="show_abstract"
      />
    </div>

    <div class="transition-all ease-linear duration-75 text-slate-500 text-sm md:text-base">
      <div :class="{ hidden: !isOpen, 'ease-linear duration-75': isOpen }">{{ props.abstract }}</div>
    </div>
  </div>
</template>

<script setup>
let props = defineProps({
  title: { type: String, default: "Title" },
  journal: { type: String, default: "Journal" },
  year: { type: Number, default: "Year" },
  authors: { type: Array, default: () => ["one", "two"] },
  pdf: { type: String, default: "" },
  abstract: { type: String, default: "lorem ipsum" },
});
let isOpen = ref(false);
function show_abstract() {
  isOpen.value = !isOpen.value;
}
</script>

<style scoped></style>
