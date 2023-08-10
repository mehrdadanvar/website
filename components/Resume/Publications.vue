<template>
  <section class="">
    <h4 class="text-2xl mb-12">Peer Reviewed Publications</h4>
    <div class="container mb-12">
      <div class="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
        <div v-for="pub in pubs" as="template" :key="pub">
          <!-- <button
            :class="[
              'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
              'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
              selected ? 'bg-slate-100 shadow' : 'text-blue-100 hover:bg-white/[0.12] hover:text-white',
            ]"
          >
            {{ pub.id }}
          </button> -->
        </div>
      </div>
      <div>
        <div class="bg-slate-100" v-for="pub in pubs">
          <div>
            <ResumeSinglePub
              :title="pub.title"
              :journal="pub.journal"
              :year="pub.year"
              :authors="pub.authors"
              :pdf="pub.pdf"
              :abstract="pub.abstract"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-1"></div>
  </section>
</template>

<script setup>
let { data: pubs } = await useFetch("/api/pubs");
console.log(pubs.value);
let isOpen = ref(false);
function toggle_abstract() {
  isOpen.value = !isOpen.value;
  console.log("toggle running");
}
let samples = ref([1, 2, 3, 4, 5, 6]);
</script>

<style scoped></style>
