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
    <MovieCard v-for="(element, index) in store.moviesList" :key="index"/>
  </div>

</template>

<style lang="scss" scoped>

@use "../../../styles/partials/variables" as *;
@use "../../../styles/partials/mixins" as *;

</style>