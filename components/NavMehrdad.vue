<template>
  <nav
    class="flex flex-col h-36 py-2 md:flex-row items-center justify-between text-gray-600 md:h-28 md:px-6 xl:px-36 bg-gray-200 md:bg-green-200 lg:bg-red-200"
  >
    <div
      class="logos text-sm md:text-base lg:text-2xl text-amber-600 border border-amber-600 px-4 rounded-md"
    >
      <NuxtLink to="/">Mehrdad Anvar</NuxtLink>
    </div>
    <div class="flex gap-5 px-12 py-6 justify-between">
      <div v-for="item of navigation_links" :key="item.id" class="link">
        <NuxtLink :to="'/' + item.route">{{ item.lable }}</NuxtLink>
      </div>
      <!-- <NuxtLink to="/blog">Blog</NuxtLink>
        <NuxtLink to="/services">Services</NuxtLink>
        <NuxtLink to="/portfolio">Portfolio</NuxtLink>
        <NuxtLink to="/register">Appointments</NuxtLink> -->
    </div>
    <div class="social text-lg flex gap-3">
      <UIcon name="i-ph-linkedin-logo-duotone" />
      <UIcon name="i-ph-gitlab-logo-duotone" />
      <UIcon name="i-ph-github-logo-duotone" />
      <UIcon name="i-ph-twitter-logo-duotone" />
    </div>
  </nav>
</template>

<script setup>
let navigation_links = [
  { id: 0, route: "about", lable: "About" },
  { id: 1, route: "resume", lable: "CV" },
  { id: 2, route: "projects", lable: "Projects" },
  { id: 3, route: "blog", lable: "Blog" },
];
</script>

<style scoped>
.link:hover {
  border-bottom: 1px orange solid;
}
</style>
