<template>
  <section class="flex flex-col gap-8">
    <h2 class="text-2xl">Peer Reviewed Publications</h2>
    <div class="grid grid-cols-1 gap-10">
      <div class="sm:flex sm:flex-col sm:gap-6 md:flex md:flex-row md:gap-24 mehrdad" v-for="pub in pubs">
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
    <div class="grid grid-cols-1"></div>
  </section>
</template>

<script setup>
let { data: pubs } = await useFetch("/api/pubs");
let isOpen = ref(false);
function toggle_abstract() {
  isOpen.value = !isOpen.value;
}
let selected = ref("true");
</script>

<style scoped></style>
