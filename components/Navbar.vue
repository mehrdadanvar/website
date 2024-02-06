<template>
  <div class="sticky top-1">
    <nav
      class="flex flex-row items-center justify-between border border-slate-400 z-30 w-7/12 rounded-lg px-6 mx-auto max-h-12 overflow-hidden bg-white backdrop-blur-sm bg-opacity-40"
    >
      <div>
        <NuxtLink to="/">
          <img
            src="/logo11.png"
            alt="rx code logo"
            class="overflow-hidden brightness-100"
            width="75"
          />
        </NuxtLink>
      </div>
      <div class="flex gap-10 text-gray-900 text-base">
        <NuxtLink to="/resume">resume</NuxtLink>
        <div class="flex gap-2 items-center">
          <UIcon name="i-solar-programming-bold-duotone" class="" />
          <NuxtLink to="/projects">projects </NuxtLink>
        </div>
        <div class="flex gap-2 items-center">
          <UIcon name="i-solar-user-hand-up-bold-duotone" class="" />
          <NuxtLink to="/about">About </NuxtLink>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup></script>

<style scoped></style>
