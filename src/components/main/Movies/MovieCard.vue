<script>
export default {
  name: "MovieCard",
  props: [
    'propsElement'
  ],
  computed: {
    isMovie() {
      return this.propsElement.hasOwnProperty('title');
    }
  },
  data(){
    return{

    }
  },
//   methods: {
//         getFlagUrl(languageCode) {
//             if (languageCode === 'en') {
//                 languageCode = 'us';
//             }
//             return `https://flagcdn.com/w80/${languageCode}.png`;
//         }
//     }
};
</script>

<template>
    
  <div class="border p-2">
    <ul>
        <li> {{ isMovie ? propsElement.title : propsElement.name }} </li>
        <li> {{ isMovie ? propsElement.original_title : propsElement.original_name }} </li>
        <li> <img :src="`https://flagcdn.com/${propsElement.original_language}/codes.json`" alt="Bandiera"> </li>
        <li> {{ propsElement.vote_average }} </li>
    </ul>
  </div>

</template>

<style lang="scss" scoped>

@use "../../../styles/partials/variables" as *;
@use "../../../styles/partials/mixins" as *;

</style>