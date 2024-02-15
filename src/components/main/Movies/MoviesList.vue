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
  },
};
</script>

<template>
  <div class="pb-5">
    <h2 v-if="store.showTitles" class="text-white text-start ms-4 mt-5">FILM</h2>
  <div class="row mx-3">
    <MovieCard v-for="(element, index) in store.moviesList" :key="index" :propsElement="element"/>
  </div>

  <h2 v-if="store.showTitles" class="text-white text-start ms-4 mt-5">SERIE TV</h2>
  <div class="row mx-3">
    <MovieCard v-for="(element, index) in store.tvShowsList" :key="index" :propsElement="element"/>
  </div>
  </div>

</template>

<style lang="scss" scoped>

@use "../../../styles/partials/variables" as *;
@use "../../../styles/partials/mixins" as *;

.row{
  height: 350px;
  overflow-x: auto;
  flex-wrap: nowrap;
}

.row::-webkit-scrollbar {
  width: 1em;
}
.row::-webkit-scrollbar-track {
  border-radius: 25px;
  background-color: rgb(76, 76, 76);
}
.row::-webkit-scrollbar-thumb {
  border-radius: 25px;
  background-color: #d02e2c;
}
</style>