<script>
import AppSearch from "./components/main/AppSearch.vue";
import MoviesList from "./components/main/MoviesList.vue";

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
      .get( store.apiUrl )
      .then( res => {
        console.log( res.data )

        store.moviesList = res.data.result

        store.loading = false
      } )
    }
  },
  mounted() {
    this.getMovies()
  }
};
</script>

<template>
  <main class="container text-center">
    <AppSearch/>
    <div v-if="(store.loading)" class="spinner-border text-danger" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
    <MoviesList/>
  </main>
</template>

<style lang="scss">
@use "./styles/general.scss";
</style>
