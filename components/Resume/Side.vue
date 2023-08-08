<template>
  <div class="font-LibreFranklin">
    <section class="border border-gray-300 rounded-lg p-6 flex flex-col gap-y-6 items-center h-screen">
      <h1 class="text-gray-700 text-3xl">Mehrdad Anvar</h1>
      <div class="my-6 text-xl text-gray-500">
        <h2>Nickname : Mario</h2>
        <h4>General Physician</h4>
        <h4>Health Researcher</h4>
        <h4>Junior Full Stack Developer</h4>
      </div>
      <p class="my-6 p-6 text-xl text-gray-500">
        I build full stack web application that facilitate providing care for patients, teach programming and
        statistics.
      </p>
      <div class="flex flex-row gap-6 justify-end mt-36">
        <UIcon
          :name="item.icon_name"
          class="text-3xl text-gray-600 hover:text-purple-600"
          v-for="item in socials"
          :key="item.id"
        />
      </div>
    </section>
  </div>
</template>

<script setup>
let socials = [
  { id: 0, icon_name: "i-carbon-logo-github", link: "" },
  { id: 1, icon_name: "i-solar-gift-bold", link: "" },
  { id: 2, icon_name: "i-solar-mailbox-bold-duotone", link: "" },
  { id: 3, icon_name: "i-carbon-logo-linkedin", link: "" },
];
</script>

<style scoped></style>
