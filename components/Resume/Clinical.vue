<template>
  <section class="container mx-auto font-LibreFranklin">
    <div class="">
      <img src="" alt="" width="70" />
      <h4 class="text-2xl mt-7">Clinical Experience</h4>
    </div>
    <div class="grid grid-cols-1 gap-6">
      <div v-for="job in jobs" :key="job" class="my-2">
        <div class="flex flex-row justify-normal gap-12 py-2 px-6 rounded-t-lg">
          <h4 class="font-bold mb-6">{{ job.title }}</h4>
          <p>{{ job.period }}</p>
        </div>
        <div class="py-2 px-6">
          <p class="italic">{{ job.place }}</p>
          <ol v-for="x in job.geo" :key="x">
            <li>{{ x }}</li>
          </ol>
          <p>{{ job.definition }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
let { data: jobs } = await useFetch("/api/clinics");
console.log(jobs);
</script>

<style></style>
