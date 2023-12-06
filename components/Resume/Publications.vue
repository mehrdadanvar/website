<template>
  <section class="flex flex-col gap-8">
    <h2 class="text-3xl text-yellow-600">Peer Reviewed Publications</h2>
    <div class="grid grid-cols-1 gap-10">
      <div
        class="sm:flex sm:flex-col sm:gap-6 md:grid md:grid-cols-4"
        v-for="pub in pubs"
      >
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
  </section>
</template>

<script setup>
// let { data: pubs } = await useFetch("/api/pubs");
import pubs from "../../assets/files/pubs.json";
let isOpen = ref(false);
let selected = ref("true");
function toggle_abstract() {
  isOpen.value = !isOpen.value;
}

// let { data: pubs } = await useFetch("http://localhost:3000/files/pubs.json");

// async function load_pubs() {
//   let response = await fetch("pubs.json");
//   let data = await response.text();
//   let content = JSON.parse(data);
//   pubs.value = content;
// }

// load_pubs();
</script>

<style scoped></style>
