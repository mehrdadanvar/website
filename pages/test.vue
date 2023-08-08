<template>
  <div class="">
    <h1>Resume</h1>
    <div>
      resume
      <UButton @click="load">get schools</UButton>
      <div>{{ schools }}fdfdfd</div>
    </div>
  </div>
</template>
<script setup>
let schools = ref([]);
async function load() {
  let response = await fetch("http://localhost:8000/resume/schools");
  let data = await response.json();
  console.log(data.message);
  schools.value = data.message;
}
load();
</script>

<style lang="scss" scoped></style>
