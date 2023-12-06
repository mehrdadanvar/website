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
</script>

<style></style>
