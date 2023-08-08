<template>
  <aside :class="`${isexpanded && 'is-expanded'}`">
    <div class="arrow" @click="expand">
      <img src="../assets/arrow-right-svgrepo-com.svg" alt="" />
    </div>
    <nav class="navbar">
      <div class="navigation">
        <div class="list-item">
          <NuxtLink class="text" to="/">Home</NuxtLink>
        </div>
        <div class="list-item">
          <NuxtLink class="text" to="/about">About</NuxtLink>
        </div>
        <div class="list-item">
          <NuxtLink class="text" to="/contact">Contact</NuxtLink>
        </div>
      </div>
    </nav>
  </aside>
</template>

<script setup>
  import { ref } from "vue";
  const isexpanded = ref(false);
  let expand = () => {
    console.log("working");
    console.log(isexpanded.value);
    isexpanded.value = !isexpanded.value;
    console.log(isexpanded.value);
  };

  // export default {
  //   name: "Sidebar",
  //   methods: {
  //     expand() {
  //       console.log("working");
  //       let expanded = "400px";
  //       this.size == expanded;
  //       console.log(this.size);
  //       console.log(expanded);
  //     },
  //   },
  // };
</script>

<style scoped>
  aside {
    width: calc(2rem +32px);
    min-height: 100vh;
    background-color: rgb(199, 199, 199);
    padding: 1rem;
    transition: 1s ease-out;
    @media (max-width: 768px) {
      position: fixed;
      z-index: 99;
    }
  }
  .navbar {
    display: flex;
    flex-direction: column;
  }
  .navigation {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  a {
    list-style: none;
    text-decoration: none;
    color: rgb(0, 0, 0);
  }
  .list-item:hover {
    background-color: rgb(200, 193, 193);
  }
  button {
    border: none;
    background-color: blue;
  }
  .is-expanded {
    width: 400px;
    background-color: red;
    transition: 1s ease-out;
  }
  .arrow:hover {
    cursor: pointer;
    background-color: red;
  }
</style>
