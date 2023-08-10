<template>
  <div>
    <NuxtLayout>
      <div>
        <NuxtLoadingIndicator />
        <NuxtPage />
      </div>
    </NuxtLayout>
  </div>
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
async function report() {
  let response = await fetch("");
}
</script>
<style scoped>
::selection {
  background-color: red;
}
</style>
