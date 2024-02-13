import { reactive } from 'vue'

export const store = reactive({
    searchText: "",
    loading: true,
    moviesList: [],
    apiUrl: 'https://api.themoviedb.org/3/search/movie?api_key=eaa5a30f2b9d66cf99ae425ef178dc47',
});