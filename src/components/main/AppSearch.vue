<script>
import { store } from '../../store'
export default {
  name: "AppSearch",
  data() {
    return {
      store
    }
  }
};
</script>

<template>
    
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
        <button class="btn btn-danger">Cerca</button>
      </div>
    </div>
    
</template>

<style lang="scss" scoped>

@use "../../styles/partials/variables" as *;
@use "../../styles/partials/mixins" as *;

</style>