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
    
  <div class="row">
    <h2>FILM</h2>
    <MovieCard v-for="(element, index) in store.moviesList" :key="index" :propsElement="element"/>
  </div>

  <div class="row">
    <h2>SERIE TV</h2>
    <MovieCard v-for="(element, index) in store.tvShowsList" :key="index" :propsElement="element"/>
  </div>

</template>

<style lang="scss" scoped>

@use "../../../styles/partials/variables" as *;
@use "../../../styles/partials/mixins" as *;

</style>