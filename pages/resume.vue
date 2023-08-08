<template>
  <div class="text-white">
    <h1>Resume</h1>
    <ResumeEducation />
    <ResumeBio />
    <ResumeBio />
    <ResumeBio />
  </div>
</template>

<script setup>
definePageMeta({
  layout: "resume",
});
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

<style lang="scss" scoped></style>
