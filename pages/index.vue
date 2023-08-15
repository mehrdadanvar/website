<template>
  <div class="test relative">
    <div class="grid grid-cols-1 mx-12 gap-y-12">
      <h1 class="text-gray-700 text-2xl mx-auto">
        A Place Where My Passion For Programming and Medicine meet
      </h1>
      <h2 class="text-2xl text-gray-600 mx-auto">I am a physician interested in health at scale</h2>
      <h3 class="text-xl mx-auto">Thats why I love computers and programming</h3>
      <div class="hidden md:block md:mx-auto md:w-2/3 md:max-w-2xl">
        <HeroTerminal />
      </div>
      <div class="-mt-96 -z-10">
        <img src="./sample1.png" alt="" width="800" class="" />
      </div>
    </div>
  </div>
</template>

<script setup>
let my_svg = ref("");
async function load_svg() {
  try {
    let response = await fetch("/background.svg");
    let svgText = await response.text();
    if (response.status === 200) {
      let animatedContent = "";
      let paths = svgText.match(/<g[^>]*\/>/g); // Extract individual path tags
      if (paths) {
        for (let i = 0; i < paths.length; i++) {
          console.log(i);
          await new Promise((resolve) => setTimeout(resolve, 1)); // Wait for animation effect
          my_svg.value = animatedContent;
        }
      }
    }
  } catch (error) {
    console.log(error);
  }
}
</script>

<style scoped>
/* .container {
  background-image: url("/background.svg");
  background-repeat: no-repeat;
  background-size: contain;
} */
/* .test {
  background-image: url("/sample.png");
  background-size: cover;
  background-repeat: no-repeat;
} */
</style>
