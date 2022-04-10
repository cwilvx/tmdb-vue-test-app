<template>
  <h1>Upcoming Movies</h1>
  <div class="m-container">
    <div
      class="m-card"
      v-for="movie in movies"
      :key="movie"
      @click="showDetails(movie)"
    >
      <div
        class="image"
        :style="{
          backgroundImage: `url(${
            'https://image.tmdb.org/t/p/w500' + movie.poster_path
          })`,
        }"
      ></div>
      <div class="title">{{ movie.title }}</div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { getUpcoming } from "../composables/upcoming";

const emit = defineEmits(["showDetails"]);

function showDetails(movie) {
  emit("showDetails", movie);
}

let movies = ref([]);

getUpcoming().then((data) => {
  movies.value = data;
});
</script>

<style>
.m-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 1rem;
}

.m-card {
  width: min-content;
}

.m-card > .image {
  width: 7rem;
  height: 10rem;
  border-radius: 0.5rem;
  background-image: url("../assets/image.webp");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.m-card > .title {
  font-size: 0.8rem;
}
</style>
