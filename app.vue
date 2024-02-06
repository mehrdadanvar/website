<template>
  <main class="app">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </main>
</template>
<script setup>
import { onMounted } from "vue";
import { onBeforeMount } from "vue";
onBeforeMount(() => {
  console.log("before mounting");
  let body = document.querySelectorAll("body");
  console.log(body);
});
onMounted(() => {
  console.log("app mounted");
  let presence = document;
  console.log(presence);
});
</script>
<style scoped>
.app {
  font-family: "Lato";
}
</style>
