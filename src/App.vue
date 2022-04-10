<template>
  <MovieCard @showDetails="showDetails" />
  <MovieDetails :movie="MovieDetail" @hideDetails="hideDetails" />
</template>

<script setup>
import { ref } from "vue";
import MovieCard from "./components/MovieCard.vue";
import MovieDetails from "./components/MovieDetails.vue";

const MovieDetail = ref(null);

function showDetails(movie) {
  MovieDetail.value = movie;
}

function hideDetails() {
  MovieDetail.value = null;
}
</script>

<style></style>
