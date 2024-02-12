<template>
  <main class="container mx-auto grid grid-cols-1 divide-gray-100 p-6 gap-6">
    <ResumeEducation />
    <ResumeClinical />
    <ResumePublications />
    <ResumeSkills />
    <ResumeResearch />
  </main>
</template>

<script setup>
definePageMeta({
  layout: "resume",
});
const config = useRuntimeConfig();
</script>

<style></style>
