<script>
import AppSearch from "./components/header/AppSearch.vue";
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
      .get( `https://api.themoviedb.org/3/search/multi?api_key=eaa5a30f2b9d66cf99ae425ef178dc47&query=${store.searchText}` )
      .then( res => {
        store.moviesList = []
        store.tvShowsList = []

        store.moviesList = res.data.results.filter(result => result.media_type === 'movie')
        store.tvShowsList = res.data.results.filter(result => result.media_type === 'tv')

        console.log(res.data)

        store.loading = false
      } )
      store.searchText = '';
    }
  },
  // mounted() {
  //   this.getMovies()
  // }
};
</script>

<template>
  
  <header>
    <AppSearch :getMovies="getMovies"/>
  </header>

  <main class="text-center">
    
    <!-- <div v-if="(store.loading)" class="spinner-border text-danger" role="status">
      <span class="visually-hidden">Loading...</span>
    </div> -->
    <MoviesList/>
  </main>
</template>

<style lang="scss">
@use "./styles/general.scss";
</style>
