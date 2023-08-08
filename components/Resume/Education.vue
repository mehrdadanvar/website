<template>
  <div class="container mx-auto font-LibreFranklin">
    <div class="">
      <img src="../assets/svgs/education.svg" alt="" width="50" />
      <h1 class="text-2xl">Education</h1>
    </div>
    <div id="wrapper">
      <div v-for="x in schools" :key="x" class="my-6 sm:flex sm:flex-col sm:gap-6 md:flex md:flex-row">
        <div class="sm:flex-col md:flex-row lg:grid grid-cols-8">
          <div class="bg-gray-600 rounded-l-lg py-4 px-4 col-span-2">
            <img class="bg-white rounded-full" src="../assets/svgs/school1.svg" alt="" width="100" />
          </div>
          <div
            class="border border-gray-200 rounded-r-lg py-4 px-6 w-3/5 text-gray-700 flex flex-col gap-3 col-span-6 min-w-fit"
          >
            <div class="flex flex-row gap-6 font-bold text-gray-800">
              <h4>{{ x.name }}</h4>
              <p>{{ x.dates }}</p>
            </div>
            <p class="text-gray-700">{{ x.major }}</p>
            <p>{{ x.level }}</p>
            <p>{{ x.location }}</p>
            <span>GPA {{ x.grade }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
let { data: schools } = await useFetch("/api/schools");
console.log(schools);

let school_logos = ref(["../assets/svgs/school1.svg", "../assets/svgs/school2.png"]);
</script>

<style></style>
