<template>
  <section class="flex flex-col gap-8">
    <h2 class="text-xl">Education</h2>
    <div class="grid grid-cols-1 gap-10">
      <div v-for="x in schools" :key="x" class="sm:flex sm:flex-col sm:gap-6 md:flex md:flex-row md:gap-12">
        <h3 class="text-lg min-w-fit">{{ x.dates }}</h3>
        <div class="flex flex-col gap-2">
          <h3 class="font-bold text-sky-800 lg:text-xl">{{ x.name }}</h3>
          <div class="text-gray-700 flex lg:text-lg gap-4">
            <h4 class="">{{ x.major }}</h4>
            <h4>{{ x.level }}</h4>
          </div>
          <div class="text-gray-600 flex lg:text-lg gap-4">
            <h4>{{ x.location }}</h4>
            <h5>GPA {{ x.grade }}</h5>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
let { data: schools } = await useFetch("/api/schools");

//let school_logos = ref(["../assets/svgs/school1.svg", "../assets/svgs/school2.png"]);
</script>

<style scoped></style>
