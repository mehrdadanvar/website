<template>
  <section class="flex flex-col gap-8">
    <h2 class="text-2xl">Clinical Experience</h2>
    <div class="grid grid-cols-1 gap-10">
      <div v-for="job in jobs" :key="job" class="sm:flex sm:flex-col sm:gap-6 md:flex md:flex-row md:gap-12">
        <h3 class="text-lg min-w-fit">{{ job.period }}</h3>
        <div class="flex flex-col gap-2">
          <h4 class="font-bold text-sky-800 lg:text-xl">{{ job.title }}</h4>
          <div class="py-2 text-gray-600">
            <p class="text-lg">{{ job.place }}</p>
            <ol class="flex gap-3 text-lg">
              <li v-for="x in job.geo" :key="x">{{ x }}</li>
            </ol>
            <p class="text-lg">{{ job.definition }}</p>
          </div>
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
