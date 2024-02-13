import { reactive } from 'vue'

export const store = reactive({
    searchText: "",
    loading: true,
    moviesList: [],
    apiUrl: 'https://api.themoviedb.org/3/search/movie?api_key=',
});