<template>
  <div class="cart">
    <div class="head">{{ title }}</div>
    <div class="image">image</div>
    <div class="body">
      <p v-for="y in numbers" :key="y">{{ y }}</p>
    </div>
    <div class="tail">tail</div>
  </div>
</template>

<script setup>
let props = defineProps({
  title: String,
  body: Array,
});
let numbers = ref(props.body);
</script>

<style scoped>
.cart {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border: 1px solid grey;
  border-radius: 1rem;
  padding: 1rem 1rem;
  min-width: 10rem;
  max-width: 20rem;
  transition: width 2s ease-in 200ms;
}
.cart:hover {
  width: 30rem;
}

.head {
  background: linear-gradient(30deg, red, blue);
  border-radius: 1rem;
}
</style>
