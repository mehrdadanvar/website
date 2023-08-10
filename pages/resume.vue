<template>
  <main class="container mx-12 grid grid-cols-1">
    <ResumeEducation />
    <ResumeClinical />
    <ResumePublications />
  </main>
</template>

<script setup>
definePageMeta({
  layout: "resume",
});
const config = useRuntimeConfig();
console.log(config);
console.log(config.mongoURI);
let schools = ref([]);
async function load() {
  let response = await fetch("http://localhost:8000/resume/schools");
  let data = await response.json();
  console.log(data);
  if (data) {
    schools.value = data.schools;
  } else {
    ("");
  }
}
</script>

<style l></style>
