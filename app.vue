<template>
  <div class="app">
    <NuxtLayout>
      <NuxtPage />
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
</script>
<style scoped>
/* @font-face {
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-stretch: 100%;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/opensans/v36/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsjZ0B4gaVI.woff2)
    format("woff2");
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
    U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191,
    U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
} */
/* .app {
  font-family: "Open Sans";
} */
.app {
  font-family: "Lato";
}
</style>
