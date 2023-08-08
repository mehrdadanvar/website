<template>
  <div class="lg:flex lg:flex-row lg:justify-between lg:gap-4">
    <div class="sticky top-1 left-2 w-1/3 lg:max-h-screen">
      <ResumeSide />
      <p></p>
    </div>
    <div class="w-2/3">
      <slot />
    </div>
  </div>
</template>

<script setup></script>

<style></style>
