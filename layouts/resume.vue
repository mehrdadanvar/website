<template>
  <div
    class="resume sm:flex sm:flex-col md:flex md:flex-col lg:flex lg:flex-row lg:justify-between lg:gap-4 bg-gray-50"
  >
    <div class="lg:sticky lg:top-1 lg:left-2 lg:w-3/12 lg:max-h-screen">
      <ResumeSide name="mehrdad" title="Anvar" />
    </div>
    <div class="bg-gray-50 sm:w-full lg:w-9/12">
      <slot />
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
/* latin */
/* latin */
@font-face {
  font-family: "Crimson Text";
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/crimsontext/v19/wlp2gwHKFkZgtmSR3NB0oRJfbwhT.woff2)
    format("woff2");
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
    U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191,
    U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
.resume {
  font-family: "Crimson Text";
}
</style>
