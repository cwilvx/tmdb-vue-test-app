<template>
  <div class="md-container" v-if="props.movie" @click="hideDetails">
    <div class="content">
      <div
        class="image"
        :style="{
          backgroundImage: `url(${
            'https://image.tmdb.org/t/p/w500' + props.movie.backdrop_path
          })`,
        }"
      ></div>
      <h3 class="title">{{ props.movie.title }}</h3>
      <div class="description">{{ props.movie.overview }}</div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  movie: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(["hideDetails"]);

function hideDetails() {
  emit("hideDetails");
}
</script>

<style>
.md-container {
  position: fixed;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  background-color: #0000007e;
  display: grid;
  place-items: center;
}

.md-container > .content {
  padding: 1rem;
  width: 30rem;
  height: 20rem;
  background-color: #201e1e;
  border-radius: 1rem;
  color: #fff;
}

.md-container > .content > .image {
  width: 100%;
  height: 10rem;
  background-image: url("../assets/image.webp");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 0.5rem;
}

.md-container > .content > .title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.md-container > .content > .description {
  font-size: 0.8rem;
  margin-bottom: 0.5rem;
}
</style>
