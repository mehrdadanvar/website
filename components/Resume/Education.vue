<template>
  <section class="container mx-auto">
    <div class="">
      <h2 class="text-xl">Education</h2>
    </div>
    <div id="wrapper">
      <div v-for="x in schools" :key="x" class="my-6 sm:flex sm:flex-col sm:gap-6 md:flex md:flex-row">
        <div class="flex flex-row gap-6 p-6 lg:ml-24">
          <h3 class="">{{ x.dates }}</h3>
          <div class="">
            <div class="flex flex-row font-bold text-gray-800 lg:text-lg">
              <h3>{{ x.name }}</h3>
            </div>
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
    </div>
  </section>
</template>

<script setup>
let { data: schools } = await useFetch("/api/schools");
console.log(schools);

//let school_logos = ref(["../assets/svgs/school1.svg", "../assets/svgs/school2.png"]);
</script>

<style scoped></style>
