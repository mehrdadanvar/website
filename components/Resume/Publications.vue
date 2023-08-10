<template>
  <section class="flex flex-col gap-6">
    <h2 class="text-2xl">Peer Reviewed Publications</h2>
    <div class="container">
      <div class="flex"></div>
      <div>
        <div class="" v-for="pub in pubs">
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
let selected = ref("true");
let samples = ref([1, 2, 3, 4, 5, 6]);
</script>

<style scoped></style>
