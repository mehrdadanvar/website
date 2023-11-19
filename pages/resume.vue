<template>
  <main
    class="container mx-auto grid grid-cols-1 divide-y-2 divide-gray-100 p-6"
  >
    <ResumeEducation />
    <ResumeClinical />
    <ResumePublications />
    <ResumeSkills />
  </main>
</template>

<script setup>
definePageMeta({
  layout: "resume",
});
const config = useRuntimeConfig();

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

<style></style>
