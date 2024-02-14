<template>
  <main class="w-full bg-zinc-950">
    <main class="container mx-auto w-2/3">
      <ContentDoc v-slot="{ doc }" class="">
        <h1>{{ article.title }}</h1>
        <div
          class="article px-6 py-6 my-6 bg-gradient-to-br from-zinc-800 to-zinc-950 rounded-xl"
          v-for="item in final"
        >
          <h2 class="text-white my-3">
            <UBadge size="lg" color="orange">{{
              item[0].children[0].value
            }}</UBadge>
          </h2>
          <p class="text-gray-300 py-6">
            {{ item[1].children[0].value }}
          </p>
          <ul
            class="opts my-4 ml-12 text-gray-400 divide-y divide-gray-700 border border-dashed border-gray-600 rounded-lg w-2/4 text-balance bg-zinc-900"
          >
            <li class="py-3 pl-6 hover:bg-white" v-for="x in item[2].children">
              {{ x.children[0].value }}
            </li>
          </ul>
          <p class="text-gray-500 my-12">{{ item[3].children[0].value }}</p>
          <img
            v-if="item[3].children.length > 1"
            :src="item[3].children[1].value"
            alt=""
          />
        </div>
      </ContentDoc>
    </main>
  </main>
</template>

<script setup>
const route = useRoute();
let target = route.params.slug[0];
console.log(target);
let { data } = await useAsyncData("", () =>
  queryContent(`/blog/${target}`).findOne()
);
console.log(data.value);
let article = data.value;
let interest = article.body.children;
let final = [];

for (let i = 0; i < interest.length; i += 4) {
  final.push(interest.slice(i, i + 4));
}
console.log(final);
</script>
<style scoped>
.article:hover {
  box-shadow: 1px 1px 20px rgb(65, 65, 65);
  border: medium soild gray;
}
</style>
