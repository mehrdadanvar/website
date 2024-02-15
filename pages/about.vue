<template>
  <main class="bg-gradient-to-t from-zinc-900 to-zinc-700">
    <section>
      <h1 class="hidden">About Mehrdad Anvar</h1>
      <img src="/selfie.webp" alt="" width="200" class="border rounded-full" />
    </section>
    <section><AboutBio /></section>
    <section class="container max-w-8xl mx-auto py-12">
      <h2>Interests</h2>
      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 bg-zinc-700 gap-6"
      >
        <div
          v-for="item in interests"
          class="border border-dashed border-zinc-400 rounded-lg"
        >
          <img :src="item.tags[0]" alt="" width="" class="rounded-t-lg" />
          <div class="cardcontent px-6 py-6">
            <h2 class="text-orange-600 font-bold">{{ item.title }}</h2>
            <h3>{{ item.description }}</h3>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
definePageMeta({ layout: "default" });
let interests = ref({});
let { data } = await useAsyncData("interests", () => {
  return queryContent("/interest").find();
});
console.log(data.value);
interests.value = data.value;
</script>

<style scoped></style>
