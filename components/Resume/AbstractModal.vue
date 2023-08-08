<template>
  <div class="abstract-container">
    <button class="btn" @click="isOpen = true">view abstract</button>
    <teleport to="body" v-if="isOpen">
      <div class="modal">
        <div class="modal-content">
          <h2>some text</h2>
        </div>
      </div>
    </teleport>
  </div>
</template>

<script setup>
  let isOpen = ref(false);
  console.log(isOpen.value);
</script>

<style>
  .abstract-container {
    position: relative;
  }
  .modal {
    position: absolute;
  }
</style>
