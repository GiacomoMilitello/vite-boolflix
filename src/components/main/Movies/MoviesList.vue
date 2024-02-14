<script>
import MovieCard from './MovieCard.vue'
import { store } from '../../../store'

export default {
  name: "MoviesList",
  components: {
    MovieCard
  },
  data () {
    return {
      store
    }
  }
};
</script>

<template>
  <h2 v-if="store.showTitles" class="text-white text-start ms-4 mt-3">FILM</h2>
  <div class="row justify-content-center mx-2">
    <MovieCard v-for="(element, index) in store.moviesList" :key="index" :propsElement="element"/>
  </div>

  <h2 v-if="store.showTitles" class="text-white text-start ms-4 mt-3">SERIE TV</h2>
  <div class="row justify-content-center mx-2">
    <MovieCard v-for="(element, index) in store.tvShowsList" :key="index" :propsElement="element"/>
  </div>

</template>

<style lang="scss" scoped>

@use "../../../styles/partials/variables" as *;
@use "../../../styles/partials/mixins" as *;

</style>