<script>
import AppSearch from "./components/main/AppSearch.vue";
import MoviesList from "./components/main/Movies/MoviesList.vue";

import { store } from './store'
import axios from 'axios'

export default {
  components: {
    AppSearch,
    MoviesList,
  },

  data(){
    return{
      store
    }
  },
  methods: {
    getMovies(){

      store.loading = true

      axios
      .get( `https://api.themoviedb.org/3/search/movie?api_key=eaa5a30f2b9d66cf99ae425ef178dc47&query=${store.searchText}` )
      .then( res => {
        console.log( res.data )

        store.moviesList = res.data.results

        store.loading = false
      } )
    }
  },
  // mounted() {
  //   this.getMovies()
  // }
};
</script>

<template>
  <main class="container text-center">
    <AppSearch/>
    <!-- <div v-if="(store.loading)" class="spinner-border text-danger" role="status">
      <span class="visually-hidden">Loading...</span>
    </div> -->
    <div class="d-flex align-items-end gap-4">
      <div class="w-50">
        <input
          type="text"
          class="form-control"
          name="movie"
          id="movie"
          placeholder="Scrivi titolo film"
          v-model="store.searchText"
        >
      </div>
      <div>
        <button @click="getMovies()" class="btn btn-danger">Cerca</button>
      </div>
    </div>
    <MoviesList/>
  </main>
</template>

<style lang="scss">
@use "./styles/general.scss";
</style>
