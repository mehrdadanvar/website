<template>
  <section
    class="grid grid-cols-1 gap-2 p-6 lg:grid lg:grid-cols-1 lg:items-center lg:h-screen font-LibreFranklin bg-gradient-to-br from-white via-white to-slate-200"
  >
    <h1 class="text-gray-700 sm: text-xl lg:text-3xl">Mehrdad Anvar</h1>
    <div class="text-gray-500 text-sm lg:text-2xl">
      <h4>Physician, Health Researcher</h4>
      <h4>Full Stack Web Developer</h4>
    </div>
    <p class="text-md lg:text-xl text-gray-500">
      I build application that facilitate facilitate care, teach programming and statistics.
    </p>
    <div class="flex sm:flex-row gap-4 transition-all duration-75 ease-linear lg:gap-10 lg:justify-center">
      <UIcon
        :name="item.icon_name"
        class="sm:text-md lg:text-2xl text-gray-500 transition-all ease-linear duration-75 hover:text-cyan-600 hover:scale-110"
        v-for="item in socials"
        :key="item.id"
      />
    </div>
  </section>
</template>

<script setup>
let socials = [
  { id: 0, icon_name: "i-simple-icons-github", link: "" },
  { id: 1, icon_name: "i-simple-icons-gitlab", link: "" },
  { id: 2, icon_name: "i-simple-icons-gmail", link: "" },
  { id: 3, icon_name: "i-simple-icons-linkedin", link: "" },
  { id: 4, icon_name: "i-simple-icons-googlescholar", link: "" },
];
</script>

<style scoped></style>
