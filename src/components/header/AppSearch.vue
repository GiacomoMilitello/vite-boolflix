<script>
import { store } from '../../store'
export default {
  name: "AppSearch",
  props: ['getMovies'],
  
  data() {
    return {
      store,
      showDiv: false,
    }
  },
  methods: {
    toggleDiv() {
      this.showDiv = !this.showDiv;
    },
  },
};
</script>

<template>
    
    <div class="d-flex align-items-center justify-content-between px-4 py-3 bg-black">
      <figure class="text-start ">
        <img class="img-fluid" src="../../../src/img/logo.png" alt="">
      </figure>
      <div class="d-flex align-items-center ">
        <div class="" v-bind:class="{ 'd-flex': showDiv }" v-show="showDiv">
        <button @click="getMovies()" class="btn btn-danger">Cerca</button>
        <input
          type="text"
          class="form-control"
          name="movie"
          id="movie"
          placeholder="Scrivi titolo film"
          v-model="store.searchText"
        >
      </div>
      <svg @click="toggleDiv" class="ms-3" width="30px" height="30px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/>
    </svg>
      </div>
    </div>
    
</template>

<style lang="scss" scoped>

@use "../../styles/partials/variables" as *;
@use "../../styles/partials/mixins" as *;
// *{
//   border: 1px dashed white;
// }
svg{
  fill: white;
  cursor: pointer;
}
.btn-danger {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
.form-control {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

</style>