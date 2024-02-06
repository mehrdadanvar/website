<template>
  <IndexHeader />
  <section
    class="border-2 border-slate-300 mx-auto h-screen w-10/12 bg-white rounded-2xl text-black"
  >
    <div class="content grid grid-cols-3 gap-12 pt-48 px-12">
      <div class="left col-span-1 rounded-lg text-white">
        <div
          class="flex flex-col items-center justify-center pt-12 px-6 backdrop-brightness-50 transition-all ease-in-out hover:backdrop-blur-md"
        >
          <h3 class="font-bold py-12">Summary of contents</h3>
          <p class="py-6">Read the updates of</p>
          <div>
            <UButton color="black" class="py-4">read more</UButton>
          </div>
        </div>
      </div>
      <div class="col-span-2 grid grid-cols-2 text-gray-700">
        <h2>Projects</h2>
        <div
          class="flex items-center justify-center gap-6 transition-all ease-in-out hover:scale-105"
        >
          <UIcon
            name="i-solar-book-bookmark-minimalistic-bold-duotone"
            class="text-4xl text-gray-500"
          />
          <h2 class="text">Blog</h2>
        </div>
        <h2>Programming Languages</h2>
        <h2>Youtube</h2>
        <h2>Element</h2>
        <h2>Interests</h2>
      </div>
    </div>
  </section>
  <hr />
  <section class="meet me my-56">about me</section>
  <section class="test"></section>
</template>

<script setup></script>

<style scoped>
.left {
  background-image: url("");
  background-size: cover;
  backdrop-filter: blur(10px);
}
</style>
